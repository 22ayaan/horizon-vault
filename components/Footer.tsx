import { signOut } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type }: FooterProps) => {
  const router = useRouter();

  const handleSignOut = async () => {
    const signedOut = await signOut();

    if (signedOut) router.push("/sign-in");
  };

  return (
    <footer className="footer">
      <div className={type === "desktop" ? "footer_name" : "footer_name-mobile"}>
        <p className="text-xl font-bold text-gray-700">{user.name[0]}</p>
      </div>

      <div className={type === "desktop" ? "footer_email" : "footer_email-mobile"}>
        <h1 className="text-14 truncate font-semibold text-gray-900">{user.name}</h1>
        <p className="text-14 truncate font-normal text-slate-500">{user.email}</p>
      </div>

      <div className="footer_image" onClick={handleSignOut}>
        <Image src="/icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
