# Deploying a Frontend Project to Netlify

## Overview
This guide outlines the steps to deploy a frontend project located in a subdirectory (`frontend/`) of your repository to Netlify. The project builds into a `dist` directory, which is then deployed by Netlify.

## Steps

### 1. Access Netlify Settings
- Log in to your Netlify account and navigate to the project you want to deploy.

### 2. Configure Build & Deploy Settings

- **Base Directory:**
  - **Value:** `frontend/`
  - **Description:** This is where Netlify will install dependencies and run the build command.

- **Package Directory:**
  - **Value:** `frontend/`
  - **Description:** Set this to the same as the base directory since your `package.json` is located in the `frontend` directory.

- **Build Command:**
  - **Value:** `npm run build`
  - **Description:** This command compiles your project and generates the output files in the `dist` directory.

- **Publish Directory:**
  - **Value:** `frontend/dist`
  - **Description:** This is the directory where Netlify will look for the files to deploy after the build process is complete.

- **Functions Directory:**
  - **Value:** `frontend/netlify/functions`
  - **Description:** If you're using serverless functions, set this to the directory where your compiled functions are stored.

### 3. Deploy Log Visibility
- Choose between **Public** (accessible to anyone with the deploy URL) or **Private** (only site administrators can access) logs based on your preference.

### 4. Build Status
- Ensure that **Active builds** is selected so Netlify automatically builds and deploys your site when you push to your Git provider.

### 5. Save the Settings
- After entering the correct values, click **Save** to apply the settings.

### 6. Trigger a Deploy
- Push a change to your repository or use the "Trigger deploy" button in the Netlify dashboard to start the deployment process.

### 7. Add deploy status to README.md
[![Netlify Status](https://api.netlify.com/api/v1/badges/e4dea5bf-a0a7-49d5-a240-e65e07bbd8be/deploy-status)](https://app.netlify.com/sites/jua-movie/deploys)

## Conclusion
By following these steps, Netlify will build and deploy your frontend project correctly from the `frontend/dist` directory, ensuring that your site is live and accessible on the web.
