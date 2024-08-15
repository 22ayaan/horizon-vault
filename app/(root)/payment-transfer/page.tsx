import HeaderBox from "@/components/HeaderBox";
import PaymentTransferForm from "@/components/PaymentTransferForm";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Transfer Funds | Horizon Vault",
  description: "Transfer funds or make payments with ease.",
};

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn?.$id,
  });
  if (!accounts) return;

  const accountsData = accounts?.data;
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Transfer Funds"
        subtext="Transfer funds or make payments with ease"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default Transfer;
