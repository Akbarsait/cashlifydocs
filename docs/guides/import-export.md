---
title: Import and Export
Description: Guide on how to Import and Export Data
---

# Importing and Exporting Your Data

> Cash Current gives you full control over your data. You can easily import transaction history from your bank or export a full backup for safekeeping.

### Accessing Data Management

1.  Navigate to the **Settings** page from the main sidebar.
2.  Click on the **General & Data** tab at the top.

### 1. Importing Transactions from a CSV

The import wizard makes it easy to add a large number of transactions at once.

1.  **Start the Import:** In the "Data Management" section, click the **Import** button next to "Import Transactions".
2.  **Step 1: Upload File:** Drag and drop your bank's `.csv` file into the window, or click to select it from your computer. If you're unsure about the format, you can click "Download Sample CSV".
    [Screenshot: The first step of the import wizard, showing the drag-and-drop area for a CSV file.]
3.  **Step 2: Map Columns:** Tell Cash Current which columns in your file correspond to the app's fields. For example, match your file's "Transaction Details" column to the app's "Description" field. **Date**, **Description**, and **Amount** are required.
    [Screenshot: The "Column Mapping" step, showing dropdowns where the user matches CSV headers to app fields like 'Date' and 'Amount'.]
4.  **Step 3 & 4: Map Categories & Accounts:** The wizard will show you all the unique categories and accounts from your file.
    * It will automatically try to match them to your existing ones.
    * For any that don't match, you can either select an existing category/account from the dropdown or choose **Create "Category Name"** to add it as a new one.
    [Screenshot: The "Category Mapping" step, showing a list of categories from the CSV file next to dropdowns for mapping them to existing or new categories.]
5.  **Step 5: Review and Confirm:** You'll see a final summary of how many transactions will be imported and how many new categories/accounts will be created. Click **"Confirm & Import"** to finish.

### 2. Exporting a Full Backup

Creating a backup is the best way to keep your data safe.

1.  In the "General & Data" settings, find the "Export Full Backup" option.
2.  Click the **Export** button.
3.  A single `.csv` file named `cash-current-backup-[date].csv` will be downloaded to your computer. This file contains everything: all your transactions, accounts, categories, and settings. Store it in a safe place!

[Screenshot: The "General &Data" settings page with the "Export Full Backup" action item highlighted.]

### 3. Restoring from a Backup

You can use a backup file to restore your data on a new device or recover from an issue.

> ⚠️ **Warning:** Restoring from a backup will **completely overwrite** all data currently in the app. This action cannot be undone.

1.  Click the **Restore...** button next to "Restore from Backup".
2.  A confirmation window will appear. Read the warning carefully and confirm that you wish to proceed.
3.  Select the `cash-current-backup.csv` file you previously exported.
4.  The app will process the file and your data will be fully restored.