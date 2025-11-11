---
title: VitePress Documentation
Description: Setting Up Your VitePress Documentation 
---

# A Guide to Setting Up Your VitePress Documentation

This guide provides a complete workflow for setting up a professional documentation site for your product using VitePress. It covers initial setup, sidebar and navbar configuration, useful Markdown examples, and deploying to a custom subdomain on Netlify.

---

## 1. ⚙️ Initial Setup & Local Workflow

VitePress is a fast, minimal, and powerful static site generator designed for documentation.

### 1.1. Install VitePress

1.  Navigate to your project folder (or a new folder for your docs).
2.  Add VitePress as a development dependency:
    ```bash
    npm add -D vitepress
    ```
3.  Run the interactive initializer:
    ```bash
    npx vitepress init
    ```
4.  The installer will ask you for your site title, description, and theme. It will then create a `docs` folder with this structure:
    ```
    docs/
    ├── .vitepress/
    │   └── config.mjs   <-- Your main configuration file
    └── index.md         <-- Your homepage
    ```

### 1.2. How to Write Your Guides

* **Homepage:** Edit `docs/index.md` to create your main landing page.
* **New Guides:** Just create new `.md` files and folders inside `docs`. The folder structure becomes your URL structure.
    * `docs/guide/getting-started.md`  ->  `.../guide/getting-started.html`
    * `docs/api/reference.md`           ->  `.../api/reference.html`

### 1.3. Your Local Workflow

1.  **Start the Dev Server:**
    ```bash
    # This command is added to your package.json by the installer
    npm run docs:dev
    ```
    This starts a local server (e.g., `http://localhost:5173`) with instant hot-reloading.
2.  **Write and Commit:**
    * Create a feature branch: `git checkout -b feat/new-guide`
    * Create or edit your `.md` files.
    * Test locally, then commit and push your feature branch.

---

## 2. 🧭 Configuration: Sidebar & Navbar

All configuration happens in your `docs/.vitepress/config.mjs` file.

### 2.1. Setting Up the Sidebar

The `sidebar` is an array of "section" objects. This is configured in `themeConfig.sidebar`.

**Example: Collapsible Sections** (Recommended)

Let's say your files are:
* `docs/guide/installation.md`
* `docs/guide/getting-started.md`
* `docs/api/overview.md`

Your config would be:

```javascript
// docs/.vitepress/config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...other config
  themeConfig: {
    sidebar: [
      {
        text: 'Guide', // The title of the section
        collapsible: true, // Makes the section collapsible
        collapsed: false, // Makes it open by default
        items: [
          // Links within the "Guide" section
          { text: 'Installation', link: '/guide/installation.md' },
          { text: 'Getting Started', link: '/guide/getting-started.md' }
        ]
      },
      {
        text: 'API Reference',
        collapsible: true,
        collapsed: true, // This section will be closed by default
        items: [
          { text: 'Overview', link: '/api/overview.md' }
        ]
      }
    ]
  }
})

```

### 2.2. Setting Up the Sidebar

The `nav` is an array of link or menu objects, configured in themeConfig.nav.

**Example: Links and a Dropdown Menu**
```javascript
// docs/.vitepress/config.mjs
export default defineConfig({
  // ...other config
  themeConfig: {
    // ...your sidebar config
    
    nav: [
      { text: 'Home', link: '/' }, // Links to docs/index.md
      { text: 'Guide', link: '/guide/getting-started.md' }, // Links to first guide page
      {
        text: 'Features', // This is a dropdown menu
        items: [
          { text: 'Feature A', link: '/features/feature-a.md' },
          { text: 'Feature B', link: '/features/feature-b.md' }
        ]
      },
      { 
        text: 'GitHub', 
        link: '[https://github.com/your-username/your-repo](https://github.com/your-username/your-repo)',
        target: '_blank' // Opens in a new tab
      }
    ]
  }
})
```

---

## 3. ✍️ Useful Markdown Examples for VitePress

VitePress enhances standard Markdown. Here are the most useful features for documentation.

### 3.1. Code Blocks (with Highlighting)

You can highlight specific lines by adding a line-range in curly braces `{}`.

**To highlight a single line (e.g., line 4):**
```markdown
```js{4}
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Awesome App', // This line will be highlighted
  description: 'Product documentation.'
})
```

**To highlight multiple lines (e.g., 2, 4-5):**
```markdown
```js{2,4-5}
import { defineConfig } from 'vitepress'
// This line (2) will be highlighted

  title: 'My Awesome App',
  description: 'Product documentation.'
  // These lines (4-5) will be highlighted
})
```

### 3.2. Callouts / Admonitions (The "Tip" Boxes)

These are essential for user guides.

```markdown
::: tip
This is a helpful tip that your user should know.
:::

::: info
This is some general information.
:::

::: warning
Be careful! This action might have side effects.
:::

::: danger
DANGER ZONE: This is a critical warning. Do not do this
unless you are sure.
:::

::: details Click to see more
You can also make a collapsible "details" block.
The content inside is hidden until clicked.
:::
```
### 3.3. GitHub-Style Alerts (Alternative)
VitePress also supports the newer GitHub-style alerts.
```markdown
> [!NOTE]
> This is a note.

> [!TIP]
> This is a tip.

> [!WARNING]
> This is a warning.
```

### 3.4. Tables
This is standard Markdown. The :-: syntax in the header row controls text alignment (left, center, right).
```markdown
| Feature | Supported | Price |
| :--- | :---: | ---: |
| Guide Pages | Yes | Free |
| API Docs | Yes | Free |
| Search | Yes | Free |
```

### 3.5. Images
The recommended way is to place images in the `docs/public/` folder.

Place your image at `docs/public/images/my-screenshot.png.`

In your Markdown file, link to it using a root-relative path (starts with a `/`):

```markdown
![My app screenshot](/images/my-screenshot.png)
```

---
## 4. 🔍 Integrating Search in VitePress

VitePress provides two excellent, pre-configured search options for your documentation site.

### Option 1: The Built-in "Local Search" (Recommended)

This is the easiest and fastest way to add a high-quality search feature. It's free, works offline, and is perfect for most small-to-medium-sized sites. It works by creating a search index file that is downloaded by the user's browser, allowing for instant client-side search.

**How to Enable It:**

1.  Open your `docs/.vitepress/config.mjs` file.
2.  Add the `search` object to your `themeConfig`.

```javascript
// docs/.vitepress/config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...other config like title, description
  
  themeConfig: {
    // ...other theme config like nav, sidebar
    
    // Add this search object to enable local search
    search: {
      provider: 'local'
    }
  }
}) 
```
### Option 2: Algolia DocSearch (The "Pro" Option)
This is a professional-grade solution used by major projects like Vue, React, and Vite.

**How it works**: Algolia, a third-party service, crawls your live website and hosts a powerful search index on its servers.

**When to use it**: Consider this later if your site becomes very large (thousands of pages) and the local search index becomes too slow.

**Cost**: Algolia DocSearch is free for open-source projects and public documentation. You can apply on their website.

**How to Enable It:**
After you get your API keys from Algolia, you configure them like this:

```markdown
// docs/.vitepress/config.mjs
export default defineConfig({
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_ALGOLIA_APP_ID',
        apiKey: 'YOUR_ALGOLIA_API_KEY',
        indexName: 'YOUR_ALGOLIA_INDEX_NAME'
      }
    }
  }
})
```

**Bonus Tip: Excluding a Page from Search**
If you have a page (like a "Thank You" page) that you don't want to appear in search results, add `search: false` to the frontmatter at the top of that Markdown file.

```markdonw
---
search: false
---

# This page is hidden from search

...rest of your content...
---
```

## 5. 🌐 Deployment: Netlify & Custom Subdomain

This is how you get your site live on `docs.my-app.com` for free, using the Git workflow we discussed.

### 4.1. Netlify Deploy Settings

Connect your Git repository to a new site on Netlify. In your **Site settings**, apply the following:

* **Build Command:**
    ```
    npm run docs:build
    ```
* **Publish Directory:**
    ```
    docs/.vitepress/dist
    ```

Set your **Production branch** to `main` and (optionally) add a staging branch like `develop`. Now, when you merge to `main`, Netlify will automatically build and deploy your site.

### 4.2. Setting Up Your Subdomain (e.g., `docs.my-app.com`)

This is a two-step process.

#### Step 1: At Your DNS Provider (GoDaddy, Namecheap, Cloudflare, etc.)

1.  Log in to the account where you bought `my-app.com`.
2.  Go to the "DNS Management" section for that domain.
3.  Add **one new record**:
    * **Type:** `CNAME`
    * **Host (or Name):** `docs`
    * **Value (or Points to):** Your Netlify site URL (e.g., `your-vitepress-site.netlify.app`).
    * **TTL:** Leave as default (e.g., "1 hour" or "Automatic").

| Type | Host/Name | Value / Points To |
| :--- | :--- | :--- |
| `CNAME` | `docs` | `your-vitepress-site.netlify.app` |

Wait 5-10 minutes for this to save.

#### Step 2: In Your Netlify Account

1.  Log in to Netlify and go to your VitePress site's dashboard.
2.  Go to **Site settings** > **Domain management**.
3.  Click the **"Add a domain"** button.
4.  Enter your full new subdomain: `docs.my-app.com`.
5.  Click **"Verify"** and then **"Add domain"**.

Netlify will automatically check your DNS records, find the `CNAME` you just made, and provision a free SSL (HTTPS) certificate for your subdomain. After a few minutes, your documentation site will be live and secure at `docs.my-app.com`.