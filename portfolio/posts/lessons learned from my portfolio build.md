---
title: "Build Failures and Version Control Recovery"
date: "2025-04-30"
---

# Lessons learned from My Portfolio Build

While developing my portfolio website, I encountered several **build failures** that temporarily broke deployment on Vercel. By leveraging *Git version control*, I recovered quickly, ensuring I could *fail forward fast* without losing work. In this post, I’ll recap the challenges and how I used Git to recover, offering insights for other developers.

## Build Failures: What Went Wrong

During development, I faced three main types of build failures that disrupted my deployment pipeline on Vercel:

- **Invalid React Children Errors**  
  These errors occurred when I rendered raw object references instead of valid JSX or strings. For example:  
  - Passing components as props without rendering them properly.  
  - Incorrectly handling `map()` outputs, such as returning an object instead of a JSX element.  
  This broke pages like my *Projects* page, where I mapped over a list of projects but returned invalid children.

- **Prerendering Crashes**  
  Some pages, like `/resume` and `/contact`, failed during static generation due to:  
  - Incompatible characters (e.g., curly quotes `’` instead of straight quotes `'`) in my content.  
  - Unescaped JSX content, such as raw HTML strings that Next.js couldn’t prerender safely.  
  This caused Vercel builds to crash, leaving my site undeployed until I fixed the issue.

- **Third-Party Module Issues**  
  Several third-party modules caused build failures on Vercel, despite working locally:  
  - *lucide-react*: Server-side rendering (SSR) incompatibilities due to dynamic imports not being handled properly.  
  - *html2pdf.js*: Missing browser-specific APIs during Vercel’s SSR process.  
  - *react-hot-toast*: Missing TypeScript types, leading to build errors (similar to the `gray-matter` issue I faced later).  
  These issues stemmed from misconfigurations in `package.json`, SSR incompatibilities, or missing type declarations.

## How I Recovered Using Git

Thanks to my **version control practices**, I was able to recover from these failures efficiently. Here’s how I used Git to regain control:

- **Frequent Commits Before New Features**  
  I committed working versions of my code before implementing each new feature. For example:  
  - Before adding the Contact form with Formspree, I committed:  
    ```
    feat: add Contact page with form structure
    ```
  - Before integrating `lucide-react` icons in the `Header`, I committed:  
    ```
    feat: add Lucide React icons to Header for dark mode toggle
    ```  
  This allowed me to revert to a *last-known-good state* if a new feature caused issues.

- **Reverting to a Stable State**  
  When a build failure occurred, I used Git to roll back to a stable commit:  
  - **Using `git checkout`**:  
    For example, after a prerendering crash on the `/resume` page, I identified the last stable commit using `git log --oneline`:  
    ```
    h7i8j9k chore: add SEO meta tags to all pages
    ```  
    I checked out that commit to restore a working state:  
    ```bash
    git checkout h7i8j9k
    ```  
    This created a detached HEAD state, allowing me to test the stable version locally before proceeding.  
  - **Using `git reset`**:  
    After a failed build due to `react-hot-toast`, I reset to the previous commit to discard the broken changes:  
    ```bash
    git reset --hard HEAD@{1}
    ```  
    This rolled back to the last working state, removing the problematic commit while keeping my working directory clean.

- **Working in Branches for Fixes**  
  After reverting, I created a new branch to fix the issue:  
  - For the `lucide-react` SSR issue, I created a branch:  
    ```bash
    git checkout -b fix-lucide-ssr
    ```  
  - I fixed the issue by adding dynamic imports for `lucide-react` icons (e.g., using Next.js’s `dynamic` import).  
  - Tested locally with `next build` and `next run`.  
  - Committed the fix:  
    ```
    fix: resolve SSR issue with lucide-react using dynamic imports
    ```  
  - Merged the fix back into `test-branch`:  
    ```bash
    git checkout test-branch
    git merge fix-lucide-ssr
    ```

- **Clear, Semantic Commit Messages**  
  I used meaningful commit messages to track my progress:  
  - Milestones: `feat: add Contact page with form structure`  
  - Fixes: `fix: escape JSX content in Resume page to resolve prerender crash`  
  - Experiments: `chore: experiment with react-hot-toast for notifications`  
  These messages made it easy to identify which commits to revert to when troubleshooting.

## Key Takeaways: Failing Forward with Control

This practice of **frequent commits**, *meaningful messages*, and **local builds** gave me full control over my development flow. I could:

- Quickly revert to a stable state when Vercel builds failed.  
- Isolate and fix issues in separate branches without risking my main branch.  
- Test locally before redeploying, ensuring a smooth deployment pipeline.  
- Fail forward fast, learning from each issue without ever losing work.

## Conclusion

Build failures are inevitable, but with **Git version control**, I turned setbacks into learning opportunities while building my portfolio.