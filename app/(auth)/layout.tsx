import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/images/horizon-vault.png"
            alt="auth image"
            width={620}
            height={620}
            className="rounded-tl-lg rounded-bl-lg border-black-1 border-4"
          />
        </div>
      </div>
    </main>
  );
}
