# Movie Site Project

## Overview
This project is a movie site that fetches data from the OMDb API. It features a user-friendly interface built with React, with backend services powered by Python. The project uses Tailwind CSS for styling.

## Technologies Used
- **Frontend:** React
- **Backend:** Python
- **Styling:** Tailwind CSS
- **API:** OMDb API

## Project Setup

### Frontend

1. **Install Dependencies:**
   - Navigate to the `frontend` directory.
   - Run `npm install` to install the necessary dependencies.

2. **Run the Development Server:**
   - Use `npm run dev` to start the React development server.
   - Access the frontend at `http://localhost:3000`.

<!-- ### Backend

1. **Install Dependencies:**
   - Navigate to the backend directory (if applicable).
   - Install any necessary Python packages using `pip install -r requirements.txt`.

2. **Run the Backend Server:**
   - Use the appropriate command to start the Python server (e.g., `python app.py` or `flask run`).
   - Ensure the backend is running and accessible at the configured port. -->

### Styling

- **Tailwind CSS:**
  - Tailwind CSS is used for styling the React components. Ensure that the Tailwind configuration is correctly set up in the `frontend` directory.

## OMDb API Integration

1. **API Key:**
   - Obtain an API key from the OMDb API website.

2. **Environment Variables:**
   - Add your API key to your environment variables. You can use a `.env` file or configure it directly in your React application.

3. **Fetch Data:**
   - Use the OMDb API to fetch movie data in your React components.
   - Example API call: `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=movie_name`

## Deployment

### Deploying to Netlify

1. **Configure Netlify Settings:**

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

2. **Save the Settings:**
   - After entering the correct values, click **Save** to apply the settings.

3. **Trigger a Deploy:**
   - Push a change to your repository or use the "Trigger deploy" button in the Netlify dashboard to start the deployment process.

## Conclusion
This project provides a comprehensive movie site experience using React for the frontend, Python for backend services, and Tailwind CSS for styling. With integration to the OMDb API, users can search and view movie information seamlessly.
