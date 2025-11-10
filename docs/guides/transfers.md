---
title: Account Transfer
description: Test account transfer
---
# ✅ Transfer Functionality Validation Checklist

How transfer works

## Creating a Transfer Transaction

* Click **"Add Transaction"**.
* In the modal that appears, select the new **"Transfer" tab**.
    * **Validate:** The "Category" field should disappear.
    * **Validate:** Two new fields, **"From Account"** and **"To Account"**, should appear.
* Select a **"From Account"** (e.g., Checking).
    * **Validate:** The **"To Account"** list correctly excludes the account you selected as the "From Account".
* Select a **"To Account"** (e.g., Credit Card).
* Enter an amount (e.g., $100) and click **Save**.

---

## Verifying Account Balance Changes

* Navigate to **Settings → Accounts**.
* Check the balances of the two accounts involved in the transfer.
    * **Test 1 (Cash → Credit Payment):**
        * The **"Checking"** (Cash) account balance should have **decreased**.
        * The **"Credit Card"** (Liability) balance should have also **decreased** (reflecting debt payment).
    * **Test 2 (Credit → Cash Advance):**
        * Create a transfer from **Credit Card** to **Cash** account.
        * The **"Credit Card"** balance should **increase** (more debt).
        * The **"Cash"** account balance should **increase**.

---

## Verifying Transaction List and Summaries

* Go to the **Transactions** or **Dashboard** page.
    * **Validate:** The new transfer should appear in the list, automatically categorized as **"Account Transfer"**.
* Check the **"Total Expenses"** summary card on the Dashboard.
    * **Crucial Validation:** The value should **not have changed** after adding the transfer, confirming transfers are correctly excluded from spending totals.

---

## Editing and Deleting Transfers

* Click on the transfer you created to **edit** it.
    * **Validate:** The modal should open directly in **"Transfer" mode** with the correct "From" and "To" accounts pre-selected.
* Change the amount and **Save**.
    * **Validate:** The affected account balances update correctly (the old transaction's effect is reversed, and the new amount is applied).
* **Delete** the transfer transaction.
    * **Validate:** The account balances revert exactly to their state **before** the transfer was ever created.

---
