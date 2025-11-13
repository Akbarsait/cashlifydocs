---
title: Larksuite Email Setup Guide
description: Complete Guide to Setting Up Larksuite Email
---
# Complete Guide to Setting Up Larksuite Email

This guide provides a full, step-by-step process for configuring your custom domain with Larksuite, creating an email, and setting it up on the web, Gmail, and Outlook.

**Prerequisite:** You must have a Larksuite account and access to your domain's DNS settings (at your registrar, e.g., Namecheap, GoDaddy).

---

## Step 1: Configure Your Domain (Admin Task)

First, you must prove you own the domain and tell the internet to send mail to Lark's servers.

1.  Log in to the **Lark Admin Console**.
2.  Navigate to **Product Settings** > **Mail** > **Service Management** > **Domain Management**.
3.  Click **"Add new domain"** and enter your domain name (e.g., `my-app.com`).
4.  **Verify Domain Ownership (TXT Record):**
    * Lark will give you a **TXT record** (e.g., `Host: @` and `Value: lark-domain-verification=...`).
    * Go to your domain provider's "DNS Management" page.
    * Add that new **TXT** record.
    * Wait a few minutes (it can take up to an hour) and click **"Verify"** back in the Lark console.
5.  **Configure Mail Delivery (MX & SPF Records):**
    * Once verified, go back to your DNS provider's "DNS Management" page.
    * **Delete** any old or existing `MX` records.
    * **Add** the following two **MX records**:

| Type | Host/Name | Value / Points To | Priority |
| :--- | :--- | :--- | :--- |
| `MX` | `@` | `mx1.larksuite.com` | `10` |
| `MX` | `@` | `mx2.larksuite.com` | `10` |

    * **Add** the following **TXT record** for SPF (to prevent your emails from going to spam):

| Type | Host/Name | Value / Points To |
| :--- | :--- | :--- |
| `TXT` | `@` | `v=spf1 +include:spf.onlarksuite.com -all` |

---

## Step 2: Create a User's Email Address (Admin Task)

Now, you can assign an email to a user (like yourself).

1.  In the **Lark Admin Console**, go to **Organization** > **Member and Department**.
2.  Find the member you want to give an email to.
3.  Click on their profile.
4.  In the "Business email" field, type the email address you want to create (e.g., `contact@my-app.com`).
5.  Click **Save**. The email account is now active.

---

## Step 3: Access Your Email on the Web

This is the simplest way to check your mail.

1.  Go to `www.larksuite.com` in your browser.
2.  Log in using the email address and password you just created.
3.  Click on **"Email"** in the main navigation bar on the left.

---

## Step 4: Enable IMAP & Get Your App Password

To use any third-party app (like Gmail or Outlook), you must do this.

#### A. As Admin: Allow IMAP/POP Access
1.  In the **Lark Admin Console**, go to **Product Settings** > **Mail**.
2.  Find the settings for user permissions (this may be under "Email Management Tools" or "User Function Permissions").
3.  Find and **enable** the setting named **"Third-party email client"**.

#### B. As User: Generate Your 16-Character App Password
1.  Log in to the **Lark desktop app** (this feature is often not on the web version).
2.  Click your profile picture in the top-left corner.
3.  Go to **Settings** > **Email**.
4.  Find **"Third-party email client login"** and click **"Set Up Now"** or "Generate."
5.  **Copy this 16-character password.** This is the password you will use for Gmail and Outlook.

---

## Step 5: Configure the Mobile Gmail App

1.  Open the Gmail app on your phone.
2.  Tap your profile icon (top-right) > **"Add another account"** > **"Other (IMAP)"**.
3.  Enter your full email: `contact@my-app.com`
4.  For the password, enter your **16-character app password**.
5.  **Incoming Server Settings (IMAP):**
    * **Server:** `imap.larksuite.com`
    * **Port:** `993`
    * **Security Type:** `SSL/TLS`
6.  **Outgoing Server Settings (SMTP):**
    * **Server:** `smtp.larksuite.com`
    * **Port:** `465`
    * **Security Type:** `SSL/TLS`
7.  Tap **"Next"** to finish the setup.

---

## Step 6: Configure Desktop Outlook

1.  Open your desktop Outlook application.
2.  Go to **File** > **"Add Account"**.
3.  Enter your email: `contact@my-app.com`
4.  Click **"Advanced options"** and check **"Let me set up my account manually"**.
5.  Click **"Connect"**, then choose **"IMAP"**.
6.  Enter the following:

    **Incoming mail (IMAP):**
    * **Server:** `imap.larksuite.com`
    * **Port:** `993`
    * **Encryption method:** `SSL/TLS`

    **Outgoing mail (SMTP):**
    * **Server:** `smtp.larksuite.com`
    * **Port:** `465`
    * **Encryption method:** `SSL/TLS`

7.  Click **"Next"**.
8.  Enter your **16-character app password** and click **"Connect"**.

---

## Step 7: Configure Mobile Outlook (iOS & Android)

1.  Open the Outlook app on your phone.
2.  Go to **Settings** (⚙️) > **"Add Mail Account"** > **"Add an Email Account"**.
3.  Enter your email: `contact@my-app.com` and tap **"Continue"**.
4.  Outlook will fail to find it automatically. Scroll down and tap **"IMAP"**.
5.  Tap **"Show advanced settings"** and enter all fields:

    **IMAP Incoming Mail Server:**
    * **IMAP Hostname:** `imap.larksuite.com`
    * **IMAP Port:** `993`
    * **Security Type:** `SSL/TLS`
    * **IMAP Username:** `contact@my-app.com`
    * **IMAP Password:** Your **16-character app password**.

    **SMTP Outgoing Mail Server:**
    * **SMTP Hostname:** `smtp.larksuite.com`
    * **SMTP Port:** `465`
    * **Security Type:** `SSL/TLS`
    * **SMTP Username:** `contact@my-app.com`
    * **SMTP Password:** Your **16-character app password**.

6.  Tap the **check mark** (✔️) or **"Sign In"** to complete the setup. 

::: tip Reference
Here's a guide from the Lark team on setting up third-party clients, which includes these steps.[Log in to Lark Mail through a third-party email client](https://www.larksuite.com/hc/en-US/articles/378111206512-log-in-to-lark-mail-through-a-third-party-email-client)
:::

## Step 8: How to Access Your New Larksuite Account
::: info Guide 
This guide explains the two-part process for logging into your new Larksuite email for the first time. It covers the one-time setup by your admin and the first login steps for you, the user.
:::

---

### 👨‍💼 1. Admin Task: Create the Email Account

Before the user can log in, the administrator must create their account and link it to a personal recovery email.

1.  Log in to the **Lark Admin Console**.
2.  Navigate to **Organization** > **Member and Department**.
3.  Add a new member (or find an existing one) and assign them their new email address (e.g., `akbar@akbarsait.com`).
4.  Set an initial password for the user.
5.  **Crucial Step:** In the user's profile, find the **"Personal Email"** field. Enter a non-Lark email address that the user can already access (e.g., their personal `@gmail.com` or `@outlook.com` account).

::: warning  Importance
**Why this is important:** The 6-digit verification code for the *first login* is sent to this **personal recovery email**, not the new Lark email (which the user can't access yet).
:::
---

### 🧑‍💻 2. User Task: First-Time Login & Verification

Once your admin has created your account, you can log in and verify it.

1.  Open your web browser and go to `https://www.larksuite.com`.
2.  Enter your new business email (e.g., `akbar@akbarsait.com`) and the password your administrator provided.
3.  Lark will stop you and show a screen titled **"Enter Email Verification Code."** This code is for your security.
    
4.  **Do not** try to find this code in your new Lark inbox.
5.  Open a **new browser tab** and log in to your **personal email account** (the one your admin linked in Step 1, e.g., your `@gmail.com` account).
6.  Find the email from Lark with the 6-digit code.
7.  Copy that code, return to the Lark login screen, and enter it into the boxes.
8.  Click **"Continue"** (or the equivalent button).
9.  **You're in!** You now have full access to your Larksuite email and other apps.