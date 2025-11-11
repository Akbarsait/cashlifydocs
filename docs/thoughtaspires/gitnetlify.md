---
title: 'Git & Netlify Workflow'
description: 'A complete workflow for managing a small application, from local development to production deployment on Netlify, including a rollback plan.'
---

# A Simple, Practical Guide to Git & Netlify

This guide provides a complete workflow for managing your 50-file application, from a new idea on your laptop to a safe, successful production release, including an emergency rollback plan.

---

## 🗺️ Part 1: The Core Concept

To keep things simple and safe, we use a simple "who" and "where" model.

### Who: The Branches

Think of your branches as having different jobs:

* **`main`:** This is your **Production** branch. It only contains code that is live on your website. It is sacred.
* **`develop`:** This is your **Staging** branch. It's a copy of `main` where you merge all your new, completed features to test them in a "like-production" Netlify environment.
* **`feat/...`:** (e.g., `feat/contact-form`) These are your **Feature** branches. This is where you *actually* write your code. They are temporary and are deleted after they are merged.


### Where: Local vs. Remote (GitHub)

* **Your Laptop (Local):** This is your **workshop**. It's for *coding, saving, and testing*. You will have local copies of `main`, `develop`, and whatever `feat/...` branch you're currently working on, all inside a single project folder. You use `git checkout` to switch between them.
* **GitHub.com (Remote):** This is your **headquarters**. It's for *reviewing, approving, and merging* code via Pull Requests (PRs). This is also what Netlify watches to trigger your builds.

---

## 🚀 Part 2: The 5-Step Workflow (From Idea to Production)

This is your day-to-day cycle for adding any new feature.

### Step 1: Start a New Feature (Locally on Laptop)

Before you write any code, you need to get the latest `develop` branch and create a new feature branch from it.

```bash
# Switch to your develop branch
git checkout develop

# Get the latest version from GitHub
git pull origin develop

# Create your new feature branch and switch to it
git checkout -b feat/add-contact-form

```
You are now on **`feat/add-contact-form`** and **100% of your work will be done here.**

### Step 2: Code and Commit (Locally on Laptop)

1.  Do all your work: create files, edit code, and test it locally on your laptop.
2.  Once you have a good stopping point, "save" your work by committing it.
    ```bash
    # Add all changed files to be "saved"
    git add .
    
    # Save them with a clear message
    git commit -m "Add contact form component"
    ```
3.  When the feature is finished locally, push your new branch from your laptop up to GitHub:
    ```bash
    # This sends your 'feat/add-contact-form' branch to GitHub
    git push -u origin feat/add-contact-form
    ```

### Step 3: Test on Staging (Using GitHub.com)

1.  Go to your GitHub.com repository in your web browser.
2.  You will see a yellow banner: "feat/add-contact-form had recent pushes." Click the **"Compare & pull request"** button.
3.  Create a **Pull Request (PR)** with the following settings:
    * **base: `develop`**
    * **compare: `feat/add-contact-form`**
4.  **This PR automatically triggers Netlify** to build your staging site.
5.  Wait for the Netlify check to pass, then click the **Staging URL** to test your feature in a live, but not production, environment.
6.  If it all looks good, click **"Merge pull request"** on GitHub. Your feature is now in the `develop` branch.


### Step 4: Go Live! (Using GitHub.com)

1.  Your `develop` branch is now tested and ready for production. It's time to promote it.
2.  On GitHub.com, create a **NEW Pull Request**.
3.  Set it up as follows:
    * **base: `main`**
    * **compare: `develop`**
4.  This PR is your "Release." Give it a good title (e.g., "Release: Contact Form").
5.  Click **"Merge pull request."**
6.  **This merge into `main` automatically triggers Netlify** to build and deploy your **live production site**.
7.  Your feature is now live!

### Step 5: Clean Up

On GitHub, you can now safely delete the `feat/add-contact-form` branch.

---
## 🚑 Part 3: The Emergency Rollback Plan

**Problem:** You merged to `main` (Step 4) and something is broken on your live site!

### Phase 1: The Instant Fix (In Netlify)

This takes ~30 seconds and fixes your live site *immediately*.

1.  Log in to Netlify and go to your site's **"Deploys"** tab.
2.  The top deploy is the *broken* one. The one right below it is your **previous, stable deploy**.
3.  Click on that previous, stable deploy.
4.  At the top of its page, click the **"Publish deploy"** button.


Your live site is now instantly rolled back to the last working version. The fire is out.

### Phase 2: The Code Fix (In Git)

Now you must fix your `main` branch so it matches the code you just rolled back to.

1.  On your laptop, get the latest `main` branch.
    ```bash
    git checkout main
    git pull origin main
    ```
2.  Go to GitHub and find the commit SHA (the long string of letters/numbers) of the bad merge into `main`.
3.  Run the `git revert` command. This creates a new "undo" commit.
    ```bash
    # The -m 1 is crucial for reverting a merge
    git revert -m 1 <SHA_of_the_bad_merge>
    ```
4.  Push this new "undo" commit to GitHub:
    ```bash
    git push origin main
    ```
Netlify will see this push, re-build your site with the reverted code, and everything will be back in sync. You can now fix the bug properly in a new feature branch.

---

## 🔧 Part 4: Your Daily Git Command Toolkit

You don't need to memorize 100 commands. You only need these 6 for 99% of your work.

1.  **`git checkout <branch-name>`**
    * **What it does:** Switches your local folder to that branch's version of the code.
    * **When you use it:** All the time, to move between branches.

2.  **`git checkout -b <new-branch-name>`**
    * **What it does:** Creates a new branch *and* switches you to it.
    * **When you use it:** Once, at the start of every new feature (Step 1).

3.  **`git pull origin <branch-name>`**
    * **What it does:** Gets the latest version of a branch from GitHub and updates your local copy.
    * **When you use it:** Before starting a new feature (`git pull origin develop`).

4.  **`git add .`**
    * **What it does:** "Stages" all your current file changes, marking them as ready to be "saved."
    * **When you use it:** Right before you `git commit`.

5.  **`git commit -m "A clear message about my change"`**
    * **What it does:** "Saves" your staged changes (from `git add`) to your local branch.
    * **When you use it:** After `git add` (Step 2).

6.  **`git push -u origin <branch-name>`**
    * **What it does:** Pushes your local "saves" (commits) from your laptop up to GitHub.
    * **When you use it:** When your feature is done locally and ready for review (Step 2).

**Bonus Safety Command:** **`git status`**
* **What it does:** Tells you what branch you're on and what files you've changed.
* **When you use it:** All the time. If you're ever confused, just type `git status`.