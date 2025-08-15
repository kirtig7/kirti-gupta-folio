# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Prerequisites

1. **Repository Setup**: Make sure your repository is pushed to GitHub
2. **Repository Name**: The project is configured for repository name `kirti-gupta-folio-main`
3. **Branch**: The workflow runs on the `main` branch

## Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. **Trigger**: On every push to the `main` branch
2. **Build**: Install dependencies and build the project
3. **Deploy**: Upload the built files to GitHub Pages

## Manual Deployment

If you want to deploy manually:

1. **Build the project**:
   ```bash
   npm run build:gh-pages
   ```

2. **Push to trigger workflow**:
   ```bash
   git add .
   git commit -m "Update for deployment"
   git push origin main
   ```

## GitHub Pages Configuration

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`

2. **Wait for Deployment**:
   - Check the Actions tab to see deployment progress
   - Your site will be available at: `https://<username>.github.io/kirti-gupta-folio-main/`

## Troubleshooting

- **Build Failures**: Check the Actions tab for error details
- **Base Path Issues**: Ensure the repository name in `vite.config.ts` matches your actual repository name
- **404 Errors**: Make sure GitHub Pages is enabled and the branch is set correctly

## Custom Domain (Optional)

To use a custom domain:

1. Add your domain in repository Settings → Pages → Custom domain
2. Update your DNS settings accordingly
3. The base path in `vite.config.ts` can be changed to `/` for custom domains 