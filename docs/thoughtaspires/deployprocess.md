---
title: Deployment Workflow
description: Professional Deployment Workflow for Cash Current
---

# Professional Deployment Workflow for Cash Current

This document outlines the industry-standard process for managing code, testing, and deploying the Cash Current application using Git, GitHub, and Netlify.

---

## Part 1: The Git Branching & Versioning Strategy

The foundation of this workflow is a structured approach to how code is managed using Git branches. This prevents accidental changes to your live application.

### Core Branches

-   **`main`**: This is your **Production Branch**. The code on this branch is what your users are actively using. It must always be stable. Direct commits to this branch are forbidden.
-   **`develop`**: This is your **Staging Branch**. It serves as an integration point for all new features and bug fixes. The code on this branch is deployed to a private staging environment for you to test.

### Workflow Diagram

```
Feature Branch --+
                 |--> Develop Branch (Staging) --+
Fix Branch ------+                               |--> Main Branch (Production)
                                                 |
Hotfix Branch -----------------------------------+
```

### Step-by-Step Development Process

1.  **Create a Feature/Fix Branch**: For any new work, create a branch from `develop`.
    -   For a new feature: `git checkout develop && git pull && git checkout -b feature/user-avatars`
    -   For a bug fix: `git checkout develop && git pull && git checkout -b fix/dashboard-alignment`

2.  **Implement Changes**: You and I will collaborate to make the necessary code changes on this new branch.

3.  **Open a Pull Request (PR)**: Once the changes are complete, push the branch to GitHub and open a Pull Request to merge your branch into `develop`.

4.  **Automated Testing (CI)**: (Optional, but recommended) A GitHub Action will automatically run your test suite against the PR. The PR should be blocked from merging if tests fail.

5.  **Review and Merge to Staging**: Manually review the changes and, if everything looks good, merge the PR into the `develop` branch.

6.  **Deploy to Staging**: This merge will automatically trigger Netlify to deploy the `develop` branch to your staging URL (e.g., `develop--yourapp.netlify.app`).

7.  **Validate on Staging**: Thoroughly test the new changes in the staging environment using your test case checklist.

8.  **Merge to Production**: When you are confident that the `develop` branch is stable and ready for release, open a new Pull Request from `develop` into `main`.

9.  **Deploy to Production**: After merging this PR, Netlify will automatically deploy the `main` branch to your live production URL.

---

## Part 2: Versioning with Semantic Versioning (SemVer)

We will use Git tags to version your releases following the `MAJOR.MINOR.PATCH` format (e.g., `v1.2.5`).

-   **PATCH** (`1.2.5` -> `1.2.6`): For backward-compatible bug fixes.
-   **MINOR** (`1.2.5` -> `1.3.0`): For new features that are backward-compatible.
-   **MAJOR** (`1.2.5` -> `2.0.0`): For breaking changes that are not backward-compatible.

### The Release Process

After you have successfully deployed to production by merging `develop` into `main`:

1.  **Switch to the `main` branch** and pull the latest changes:
    ```bash
    git checkout main
    git pull origin main
    ```

2.  **Create a new Git tag** with the new version number:
    ```bash
    # For a patch release
    git tag v1.0.1

    # For a minor feature release
    git tag v1.1.0
    ```

3.  **Push the tag to GitHub**:
    ```bash
    git push origin v1.1.0
    ```

4.  **Create a Release on GitHub**: Go to your repository's "Releases" page on GitHub and draft a new release based on the tag you just pushed. Add release notes detailing the new features and bug fixes.

---

## Part 3: Netlify Configuration

1.  **Connect to GitHub**: Link your Netlify account to the GitHub repository.

2.  **Production Deployment**:
    -   Set the **Production branch** to `main`.
    -   Build command: `npm run build`
    -   Publish directory: `dist`

3.  **Staging Deployment**:
    -   In Netlify, go to **Site settings > Build & deploy > Continuous deployment > Branches**.
    -   Enable **Branch deploys**.
    -   Add a new branch control for the `develop` branch.

Netlify will now automatically build and deploy every commit pushed to `main` and `develop` to their respective URLs.
