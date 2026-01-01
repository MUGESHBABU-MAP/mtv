# MTV - IPTV Player

A simple IPTV player built with React, Vite, and TypeScript. It allows you to watch live TV streams from a curated list of channels.

## Features

- Live TV streaming from a local JSON playlist.
- Two different views for channel selection:
  - A TV Guide view with a player and a simple channel list.
  - A detailed "enterprise-grade" table view of all channels.
- Dark theme for comfortable viewing.
- Pre-configured for easy, automated deployment to GitHub Pages.

## Getting Started

To get the project up and running on your local machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project directory:
    ```bash
    cd mtv
    ```
3.  Install the required dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open your browser and navigate to the local URL provided by Vite (e.g., `http://localhost:5173`).

## Building for Production

To create a production-ready build of the application, run the following command:

```bash
npm run build
```

This will compile the application and output the static files to the `dist` directory.

## Deployment

This project is configured for automated deployment to GitHub Pages using GitHub Actions.

1.  **Push to `main`**: Every time you push a commit to the `main` branch, the workflow located at `.github/workflows/deploy.yml` will automatically run.
2.  **Build and Deploy**: The workflow will install dependencies, build the application, and deploy the contents of the `dist` directory to the `gh-pages` branch.
3.  **GitHub Pages Setup**: In your GitHub repository settings, go to **Pages** and set the **Source** to **GitHub Actions**.

Your application will then be available at `https://<your-github-username>.github.io/mtv/`.
