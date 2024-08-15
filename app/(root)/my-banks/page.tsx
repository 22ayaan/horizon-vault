import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Banks | Horizon Vault",
  description: "Manage your connected bank accounts.",
};

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn?.$id,
  });
  accounts.data.map((account: Account) => {
    console.log(account);
  });

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Manage your connected bank accounts."
        />

        <div className="space-y-4">
          <h2 className="header-2">Your Cards</h2>
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard
                  key={a.id}
                  account={a}
                  userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
                  showBalance={true}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
