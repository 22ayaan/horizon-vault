"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { encryptId, extractCustomerIdFromUrl, parseStringify } from "../utils";
import {
  CountryCode,
  ProcessorTokenCreateRequest,
  ProcessorTokenCreateRequestProcessorEnum,
  Products,
} from "plaid";
import { plaidClient } from "../plaid";
import { revalidatePath } from "next/cache";
import { addFundingSource, createDwollaCustomer } from "./dwolla.actions";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;

// ****************************************************************

// APPWRITE USER ACTIONS

export const signIn = async ({ email, password }: signInProps) => {
  try {
    // Mutation / Database / Make fetch
    const { account } = await createAdminClient();

    const response = await account.createEmailPasswordSession(email, password);

    return parseStringify(response);
  } catch (error) {
    console.error("Error => ", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  let newUserAccount;

  try {
    // create a user account
    const { account, database } = await createAdminClient();

    newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    if (!newUserAccount) throw new Error("Error creating user");

    const dwollaCustomerUrl = await createDwollaCustomer({
      ...userData,
      type: "personal",
    });

    if (!dwollaCustomerUrl) throw new Error("Error creating Dwolla customer");

    const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl);

    const newUser = await database.createDocument(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      ID.unique(),
      {
        ...userData,
        userId: newUserAccount.$id,
        dwollaCustomerId,
        dwollaCustomerUrl,
      }
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error) {
    console.error("Error => ", error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const signOut = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");
    const response = await account.deleteSession("current");
    return response ? true : false;
  } catch (error) {
    console.error("Error => ", error);
    return false;
  }
};

// ****************************************************************

// PLAID USER ACTIONS

export const createLinkToken = async (user: User) => {
  try {
    const tokenParams = {
      user: {
        client_user_id: user.$id,
      },
      client_name: user.name,
      products: ["auth"] as Products[],
      country_codes: ["US"] as CountryCode[],
      language: "en",
    };

    const response = await plaidClient.linkTokenCreate(tokenParams);

    return parseStringify({ linkToken: response.data.link_token });
  } catch (error) {
    console.error(error);
  }
};

export const createBankAccount = async ({
  userId,
  bankId,
  accessToken,
  accountId,
  fundingSourceUrl,
  sharableId,
}: createBankAccountProps) => {
  try {
    const { database } = await createAdminClient();

    const bankAccount = await database.createDocument(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      ID.unique(),
      {
        userId,
        bankId,
        accessToken,
        accountId,
        fundingSourceUrl,
        sharableId,
      }
    );

    return parseStringify(bankAccount);
  } catch (error) {
    console.error(error);
  }
};

/**
 *
 * 1. Exchange public token for permanent access token and item ID
 * 2. Get account Information via Plaid using that access token
 * 3. Create a processor token for Dwolla using the access token and account ID
 * 4. Generate processor token based on request object
 * 5. Create a funding source URL for the account using Dwolla customer ID, processor token, and bank name.
 * 6. Create a bank account using user ID, item ID, account ID, access token, funding source URL, and shareable ID.
 * 7. Revalidate path
 * 8. Return a success message
 *
 */

export const exchangePublicToken = async ({
  publicToken,
  user,
}: exchangePublicTokenProps) => {
  try {
    // Exchange public token for permanent access token and item ID
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    const accessToken = response.data.access_token;
    const itemId = response.data.item_id;

    // Get account Information via Plaid using that access token
    const accountResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    // Extract account data from response
    const accountData = accountResponse.data.accounts[0];

    // Create a processor token for Dwolla using the access token and account ID
    const request: ProcessorTokenCreateRequest = {
      access_token: accessToken,
      account_id: accountData.account_id,
      processor: "dwolla" as ProcessorTokenCreateRequestProcessorEnum,
    };

    // Generate processor token based on request object
    const processorResponse = await plaidClient.processorTokenCreate(request);

    const processorToken = processorResponse.data.processor_token;

    /**
     * Create a funding source URL for the account using Dwolla customer ID,
     * processor token, and bank name.
     */
    const fundingSourceUrl = await addFundingSource({
      dwollaCustomerId: user.dwollaCustomerId,
      processorToken,
      bankName: accountData.name,
    });

    // if funding source url not created, ERROR!
    if (!fundingSourceUrl) throw new Error("Failed to create funding source");

    /**
     * create a bank account using user ID, item ID, account ID,
     * access token, funding source URL, and shareable ID.
     */
    await createBankAccount({
      userId: user.$id,
      bankId: itemId,
      accessToken,
      accountId: accountData.account_id,
      fundingSourceUrl,
      sharableId: encryptId(accountData.account_id),
    });

    revalidatePath("/");

    return parseStringify({
      publicTokenExchange: "success",
    });
  } catch (error) {
    console.error(error);
  }
};
