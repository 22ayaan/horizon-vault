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

Checkout Horizon Vault [here](https://horizonvault.vercel.app).

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

1. Press the "Continue" button to begin connecting a Plaid Sandbox Account.
<img width="1440" alt="Screenshot 2024-09-26 at 5 07 56 PM" src="https://github.com/user-attachments/assets/d313ef99-8c69-4fa5-be17-faf8c97b68e5">

2. You will be greeted with a secure Plaid pop-up like so. Click "Continue" to proceed:
<img width="1440" alt="Screenshot 2024-09-26 at 5 08 12 PM" src="https://github.com/user-attachments/assets/c1f4c89b-3118-4b81-bd66-8a333c9e2eff">

3. You will get the option to choose from different banks to connect with (it doesn't matter which one you pick as they are all test versions):
<img width="1440" alt="Screenshot 2024-09-26 at 5 08 24 PM" src="https://github.com/user-attachments/assets/1959887f-4ee9-4cb4-a543-892c4c59c023">

4. The option I picked is Chase Bank and I was greeted with the following screen. Click "Continue to log in":
<img width="1440" alt="Screenshot 2024-09-26 at 5 08 32 PM" src="https://github.com/user-attachments/assets/49bd93d4-9555-4288-a03d-e8c1443ff01b">

5. You will be redirected to a new full screen window operated by Plaid sanbox under the name "First Platypus Bank". **To sign in enter username: `user_good` and password: `pass_good`**. Then click "Sign in".
<img width="1440" alt="Screenshot 2024-09-26 at 5 08 40 PM" src="https://github.com/user-attachments/assets/605cffd2-bc4f-4210-84ce-776e9d778486">

6. The default option is "Mobile". Just click "Get code":
<img width="1440" alt="Screenshot 2024-09-26 at 5 10 03 PM" src="https://github.com/user-attachments/assets/59e1a0af-a444-45ba-a2cb-fda6308f51eb">

7. The Code field can be left blank. Just click "Submit":
<img width="1440" alt="Screenshot 2024-09-26 at 5 10 37 PM" src="https://github.com/user-attachments/assets/2d309343-4c29-446d-ab1d-57aa36381152">

8. In the next screen choose either `Plaid Checking` or `Plaid Savings`:
<img width="1440" alt="Screenshot 2024-09-26 at 5 10 49 PM" src="https://github.com/user-attachments/assets/f977373d-6e15-442f-b2a8-b7df6f6513ca">

9. Scroll down and check both consent boxes and click `Continue`:
<img width="1440" alt="Screenshot 2024-09-26 at 5 10 59 PM" src="https://github.com/user-attachments/assets/8a6fbf3f-9f1f-42d6-90ae-c22b37539e4f">

10. Agree to the Terms and Conditions and click `Connect account information`:
<img width="1440" alt="Screenshot 2024-09-26 at 5 11 04 PM" src="https://github.com/user-attachments/assets/36289067-0c5b-4a73-99b2-b614100639fa">

12. Once thats complete, you should be greeted with this Success screen. Click `Continue` and you will be redirected to your dashboard with all your account data loaded:
<img width="1440" alt="Screenshot 2024-09-26 at 5 11 19 PM" src="https://github.com/user-attachments/assets/946daef3-6517-4599-822c-6270aed53800">
