<div align="center">
  <br />
    <a href="https://horizonvault.vercel.app/" target="_blank">
      <img width="1440" alt="Screenshot 2024-08-17 at 7 58 28 PM" src="https://github.com/user-attachments/assets/15770357-3de5-46cc-be77-09684fcd59da">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">Horizon Vault - A Modern Finance Management Dashboard</h3>
  
   <div align="center">
     A finance management dashboard that integrates multiple bank accounts, displays real-time transactions, and enables seamless money transfers to other users on the platform.
   </div>
</div>

## 📋 <a name="table">Table of Contents</a>

If you are here for instructions on how to connect your bank account to the website, skip to this section.

1. 👋 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔥 [Features](#features)
4. ⚡️ [Quick Start](#quick-start)
5. 📸 [Snippets](#snippets)
6. 🧑‍🏫 [Instructions to connect bank account in Plaid Sandbox](#instructions)

## <a name="introduction">👋 Introduction</a>

Horizon Vault is a financial management platform built with Next.js that seamlessly integrates with multiple bank accounts, offering real-time transaction tracking, effortless money transfers between users, and robust financial management tools to streamline your finances.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## <a name="features">🔥 Features</a>

🚀 **Home Page**: Get a comprehensive overview of your account, including total balance across all connected banks, recent transactions, spending categories, and more.

🚀 **My Banks**: Access a detailed list of all connected banks, complete with respective balances and account information at your fingertips.

🚀 **Transaction History**: Easily navigate through your transaction history with advanced pagination and filtering options for different banks.

🚀 **Funds Transfer**: Effortlessly transfer funds to other accounts with Dwolla, using required fields and recipient bank IDs for smooth transactions.

🚀 **Authentication**: Experience ultra-secure SSR authentication with rigorous validations and authorization, safeguarding your financial data.

🚀 **Connect Banks**: Seamlessly link multiple bank accounts with Plaid integration, bringing all your finances under one roof.

🚀 **Real-time Updates**: Enjoy instant updates across all pages when new bank accounts are connected, keeping your information up-to-date.

🚀 **Responsiveness**: Experience a consistent user interface that adapts flawlessly across desktop, tablet, and mobile platforms, ensuring a seamless experience everywhere.

And so much more, including top-tier code architecture and reusability, designed to elevate your financial management experience.

## <a name="quick-start">⚡️ Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/22ayaan/horizon-vault.git
cd horizon-vault
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/?utm_source=youtube&utm_content=reactnative&ref=JSmastery), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">📸 Snippets</a>

## <a name="instructions">🧑‍🏫 Instructions to connect bank account in Plaid Sandbox</a>
