---
title: My Stack 
description: Dev Stack
---
# Summary: The "One-Man Company" Tool Stack

This document summarizes the technical and product management stack we've selected. The guiding principle for a one-man company is a set of tools that are **free or very low-cost**, **low-maintenance**, and **professional-grade**.

---

## 1. Code & Deployment Workflow

This is the core of how the application and its documentation are built and published.

* **Tools:** Git + Netlify
* **Hosting Platform:** **Netlify**. We chose Netlify for its free tier, which provides a powerful, automated push-to-deploy workflow.
* **Branching Strategy:**
    * `main`: This is the **Production** branch. Any code merged here is live.
    * `develop`: This is the **Staging** branch. Merging here triggers a Netlify "Deploy Preview" for testing.
    * `feat/...`: All new work is done on temporary feature branches.
* **Automated Workflow:**
    1.  Work is done on a `feat/` branch.
    2.  A Pull Request (PR) is made to `develop`.
    3.  Netlify automatically builds a staging site for review.
    4.  After approval, a PR is made from `develop` to `main`.
    5.  Netlify automatically builds and deploys the final site to production.
* **Rollback Plan:**
    1.  **Instant Fix:** Use Netlify's "Publish deploy" button to immediately roll back to a previous, stable version.
    2.  **Code Fix:** Use `git revert -m 1 <merge-commit-sha>` on the `main` branch to undo the bad merge in your code history.

---

## 2. Public-Facing Site & Email

These are the tools that represent your company to your users.

* **Documentation Site:** **VitePress**
    * **Why:** We chose VitePress because it's extremely fast, low-maintenance, and creates a beautiful, professional documentation site from simple Markdown files. It's simpler than Docusaurus for a solo developer.
    * **Hosting:** Deployed via the Netlify workflow described above.
    * **Domain:** We will use a custom subdomain (e.g., `docs.my-app.com`) by adding a `CNAME` record in the DNS provider (like Namecheap) and pointing it to the Netlify site.
* **Professional Email:** **(Final Decision: Larksuite or SpaceMail)**
    * **Why:** Our research found that most free (Zoho) and low-cost (Namecheap) plans have hidden "gotchas" that withhold full IMAP/POP/SMTP support to upsell you. The final options below are the best-in-class solutions that are transparent and meet our "full mobile/desktop access" requirement.

    * **PATH 1 (Truly Free): Larksuite**
        * **Cost:** **Free** (Starter Plan).
        * **Key Features:** Full **IMAP/POP/SMTP support** (confirmed), 1 custom domain, up to 20 users, and a full productivity suite (100GB shared storage, calendar, docs, etc.).
        * **Verdict:** The best all-in-one *free* solution, even if the extra tools are overkill.

    * **PATH 2 (Simple & "Almost Free"): SpaceMail or Purelymail**
        * **Cost:** **~$6 - $10 per *year***.
        * **Key Features:** Full, no-nonsense **IMAP/POP/SMTP support**. These are simple, "no-frills" dedicated email hosts built to be cheap and reliable without upsells.
        * **Verdict:** The best "it just works" paid option for the lowest possible price.

    * **PATH 3 (Free but Technical): The "Split" Method**
        * **Cost:** **Free**.
        * **Key Features:** Use **Cloudflare Email Routing** to forward mail to a free Gmail account (for IMAP), and use Gmail's/Brevo's SMTP to send *as* your custom domain.
        * **Verdict:** 100% free and powerful, but requires a complex, one-time technical setup of DNS records (SPF, DKIM, etc.).

---

## 3. Product Management & Feedback (The Final Choice)

This stack handles how we track our work and interact with our user community. After comparing GitHub-native, Canny, Featurebase, and UserJot, we found a clear winner.

* **Tool:** **UserJot (Free Plan)**
* **Why We Chose It:** It provides the perfect all-in-one solution for free, without the "gotcha" limitations of its competitors.
    * **Beats Canny:** Canny's free plan has a 25-user limit, which is a trap. UserJot has **unlimited users**.
    * **Beats Featurebase:** Featurebase's free plan has a 1-board limit. UserJot's free plan includes **2 boards**.

### Our Product Management Workflow (Using UserJot)

We will use UserJot's free plan to manage the entire feedback-to-release lifecycle in one place:

* **Issue Tracking & Feedback:**
    * **Board 1: `🐛 Bug Reports`:** One of our two free boards will be dedicated to user-submitted bug reports.
    * **Board 2: `💡 Feature Requests`:** The other free board will be for new ideas and feature requests, which users can upvote.
* **Public Roadmap:**
    * We will use UserJot's built-in **Roadmap** feature.
    * We will configure it with three simple columns: **"Planned," "In-Progress,"** and **"Complete."**
    * When we change a post's status (e.g., from "Backlog" to "Planned"), it will automatically appear in the correct column on the public roadmap, keeping users informed.
* **Release Notes / Changelog:**
    * We will use UserJot's built-in **Changelog** feature.
    * When a feature from the roadmap is moved to "Complete," we can write a release note for it. This closes the loop and automatically notifies users who voted for that feature.

#### Product Management Tool Comparison (For a Solo Developer)
This document summarizes the comparison of free-tier product management tools (Canny, UserJot, and Featurebase) to find the best fit for a one-man company.

---

#### Quick Comparison: Canny vs. UserJot vs. Featurebase

| Feature | Featurebase | Canny.io | **UserJot (The Winner)** |
| :--- | :--- | :--- | :--- |
| **Price** | **Free** | **Free** | **Free** |
| **The "Free Plan Gotcha"** | **Only 1 Feedback Board** | **25 Tracked User Limit** | **(No major gotcha)** |
| **Feedback Boards** | 1 | Unlimited | **2 Boards** |
| **Unlimited Users/Posts?** | **Yes** (Unlimited users) | **No** (Limited to 25 users) | **Yes** (Unlimited users) |
| **Public Roadmap?** | **Yes** | **Yes** | **Yes** |
| **Changelog (Release Notes)?** | **Yes** | **Yes** | **Yes** |
| **Next Paid Plan** | ~$49/month | **~$99/month** | ~$29/month |

---

#### In-Depth Analysis & Recommendation

Based on the specific needs for a free, professional, and low-maintenance tool that avoids "traps" that force an upgrade, there is a clear winner.

#### 1. The Winner: UserJot
**UserJot's free plan seems tailor-made for this use case.**

It directly solves the two problems we found with its competitors:
1.  **It beats Featurebase's "1-board" limit.** The free plan gives you **2 boards**, which is perfect. You can create one for "💡 Feature Requests" and a second one for "🐛 Bug Reports."
2.  **It beats Canny's user limit.** The free plan has **unlimited users** and **unlimited posts**, just like Featurebase.

With UserJot, you get a single, all-in-one tool for free that does everything required:
* Collect feature ideas (on Board 1).
* Collect bug reports (on Board 2).
* Prioritize them with upvotes.
* Move them to your public **Roadmap** ("Planned," "In-Progress," "Complete").
* Announce them on your **Changelog** when they're done.

#### 2. The Runner-Up: The "Split Stack" (Featurebase + GitHub)
This is also a 100% free and very professional solution:

* **Featurebase:** Use it for "Feature Requests," "Roadmap," and "Changelog." Its "unlimited users" policy is fantastic.
* **GitHub Issues:** Use it for "Bug Reports." It's a powerful, unlimited, and free bug tracker.

This is a perfectly valid choice if you prefer to keep your bug tracking "closer" to your code. Its only "con" is that it's two separate systems for your users.

#### 3. Not Recommended: Canny.io
**Canny's free plan is a "ticking time bomb."**

The **25 tracked user limit** is a trap. A "tracked user" is *anyone* who posts, votes, or comments. You could hit this limit in your first week. The moment you hit 26 users, your feedback board stops working until you upgrade to their "Core" plan, which starts at **~$99/month**. This fails the "low-cost" requirement completely.


#### Final Recommendation

We concluded that **UserJot** was the best all-in-one solution, as its free plan provides the "Features + Bugs + Roadmap + Changelog" workflow with unlimited users, all in one place.

---

## 4. Application Backend & Business Tools

This section covers the "engine" of the product itself: the database, authentication, payments, and analytics required to run the business.

### 4.1. Backend, Database & Offline Sync

* **Tool:** **Firebase (Firestore)**
* **Why:** This is the most critical decision. For an expense tracker app with an "offline-first" requirement, we need a service with **built-in data synchronization**.
    * **vs. Supabase/Appwrite:** These are excellent, but they do *not* provide an automatic, out-of-the-box sync engine for offline IndexedDB data. We would have to build this complex sync logic ourselves.
    * **Firebase's Killer Feature:** The Firestore SDK has **built-in offline persistence**. With one line of code (`enablePersistence`), the SDK automatically handles all offline/online data synchronization, conflict resolution, and caching. This saves months of development.
* **Cost & Scalability:** Your user base (100-1,000 users) fits perfectly within the **Firebase "Spark" Free Tier**.
    * **Free Tier:** Includes 10,000 Monthly Active Users (MAUs) for Authentication, 1 GiB of database storage, and a generous daily quota for 50,000 reads and 20,000 writes.
    * **Verdict:** Your app will be **100% free** for the foreseeable future, as an expense tracker is a low-intensity app.

### 4.2. Payments (Handling Sales & Global Tax)

* **Tool:** **Lemon Squeezy**
* **Why:** We are choosing a **Merchant of Record (MoR)** over a direct payment processor like Stripe.
    * **The Problem:** As a solo developer, using Stripe directly would make you responsible for calculating, collecting, and remitting sales tax (like VAT/GST) in every single country you sell to. This is a non-trivial legal and financial burden.
    * **The MoR Solution:** Lemon Squeezy acts as a "reseller." Your customer pays them, and they handle 100% of global sales tax and compliance. They then pay you (minus their fee). This completely removes the tax burden from you.
* **Cost:** Pay-as-you-go. It costs $0 until you make your first sale (e.g., 5% + 50¢ per transaction).

### 4.3. Analytics & User Insight

* **Tool:** **Microsoft Clarity**
* **Why:** Google Analytics is complex and overkill. Clarity is **100% free forever** with no traffic limits.
* **Key Features:**
    1.  **Standard Analytics:** Page views, top pages, referrers, etc.
    2.  **Heatmaps & Session Recordings:** Its killer feature. You can watch video recordings of user sessions to see where they click, where they get stuck, and how they interact with your app. This is invaluable for finding bugs and improving UI/UX.

### 4.4. Marketing & Growth

* **Landing Page:** **Carrd.co**
    * **Why:** While VitePress handles documentation, we need a dedicated, high-converting landing page to sell the product to new visitors. Carrd is the standard for solo founders: it builds beautiful, responsive one-page sites in minutes.
    * **Cost:** Free plan available. Pro plan is ~$19/year (allows custom domain).
* **Email Marketing:** **Brevo (formerly Sendinblue)**
    * **Why:** We need a tool to collect email addresses for a waitlist or newsletter. Brevo's free plan is one of the best on the market.
    * **Free Plan:** Includes **unlimited contacts** and up to 300 emails sent per day, which is perfect for product updates.

### 4.5. Customer Support

* **Tool:** **Tawk.to** or **Crisp**
* **Why:** Email support is slow. A "Live Chat" widget on the marketing site helps convert visitors into users by answering questions instantly.
* **Free Plan:**
    * **Tawk.to:** 100% free forever, unlimited agents.
    * **Crisp:** Has a "Basic" free plan that is modern and simple.

### 4.6. Legal & Compliance

* **Tool:** **Termly** (or similar policy generator)
* **Why:** Every app legally requires a **Privacy Policy** and **Terms of Service**, especially when handling user data and payments.
* **Function:** You answer a simple questionnaire about your app, and it auto-generates the necessary legal text for you to paste into your site.
* **Cost:** Free plans typically cover one basic policy, which is enough to get started.  

---

## 5. Summary: The Complete One-Man Company Stack

| Category | Tool | Why We Chose It |
| :--- | :--- | :--- |
| **Code & Deployment** | | |
| Code Repository | **Git / GitHub** | Industry standard; required for Netlify integration. |
| Hosting Platform | **Netlify** | Free, automated Git-based deploys (push-to-deploy). |
| **Sites & Docs** | | |
| Documentation Site | **VitePress** | Fast, simple, professional-looking docs from Markdown. |
| Marketing Landing Page | **Carrd.co** | Builds beautiful, responsive one-page sites. (~$19/yr). |
| **Backend & Data** | | |
| Backend & Auth | **Firebase** | **Built-in Offline Sync** (via `enablePersistence`). Solves our core app problem. |
| Database | **Firestore** | Free, scalable NoSQL DB. Handles 1,000 users in the free tier. |
| **Product Management** | | |
| Feedback & Bugs | **UserJot** | **All-in-one free plan** (2 boards, unlimited users). |
| Public Roadmap | **UserJot** | Built-in "Planned / In-Progress / Complete" board. |
|

# Recommendation: Firebase & Firestore for Your Expense Tracker

Based on your specific requirements for an expense tracker (React, offline-first, cross-device sync, and built-in auth), here is my formal recommendation.

In short, **Firebase (with Firestore) is the best possible choice** for your project.

Your most critical requirement is moving from a local-only IndexedDB to a system that **syncs user data across devices and platforms**, has built-in auth, and supports **offline use**.

This "offline sync" is the single hardest part to build yourself. With other backends (like Supabase or Appwrite), you would have to write a complex engine to manage local changes, detect when the app is online, send changes to the cloud, and merge changes from the cloud.

This is the exact problem Firebase was built to solve.

---
## 1. The Killer Feature: Built-in Offline Persistence

This is the #1 reason to choose Firebase for this project.

The Firebase Firestore SDK (for web, React, etc.) has offline data persistence built-in. You enable it with **one line of code**.

Once enabled, the SDK automatically:
* **Caches Data:** It creates its own local cache of your data (using IndexedDB under the hood).
* **Works Offline:** When your user is offline, all their new expenses and edits are saved to this local cache. Your app still feels fast and fully functional.
* **Syncs Automatically:** The moment the user's device comes back online, the SDK automatically syncs all the local changes up to the cloud and pulls down any changes made on other devices.
* **Handles Conflicts:** It even handles basic data conflicts (by default, the "last write wins"), saving you from having to build this logic.

This one feature saves you what would be weeks or months of complex development. Supabase and Appwrite **do not** offer this out-of-the-box. With them, you would have to build this entire sync engine yourself.

---

## 2. Built-in, Easy Authentication

**Firebase Authentication** is industry-leading, easy to use, and integrates perfectly with Firestore. It will handle all your user sign-up, login, and "forgot password" flows out of the box.

This allows you to easily create security rules for your database, such as:

> "A user can *only* read or write expense documents that have *their own User ID* on them."

This ensures your users' financial data is completely private and secure from other users.

## 3. Affordability for Your Scale

This is the other key factor. For your projected user base (100-250 in Year 1, 1000 in Year 3), your app will be **100% free.**

Firebase's "Spark" free tier is more than generous enough to handle your load. An expense tracker is a low-intensity app, which is perfect for this pricing model.

| Firebase Service | "Spark" Free Tier Limit | Your Likely Usage (at 1,000 users) |
| :--- | :--- | :--- |
| **Authentication** | 10,000 Monthly Active Users | **~1,000** (Well under the limit) |
| **Firestore Storage** | 1 GiB | **~50-100 MB** (Even a million expense entries will not come close to 1 GiB) |
| **Firestore Reads** | 50,000 per day | **Well within the limit.** (You'd need all