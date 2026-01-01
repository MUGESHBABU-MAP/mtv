# Project Summary: MTV Player

This document summarizes the current state of the MTV Player application.

## 1. Project Overview

A simple, responsive React application built with Vite and TypeScript to browse and play IPTV channels. The application is set up for automatic deployment to GitHub Pages.

## 2. Current Features

*   **Channel Browsing:**
    *   Fetches a list of IPTV streams from the `iptv-org` API.
    *   Displays channels in a list.
    *   Includes a search bar to filter channels by name.
*   **Video Playback:**
    *   Integrates `react-player` to stream selected channels.
    *   The player shows a loading indicator while buffering.
    *   The player does **not** autoplay on initial page load; playback starts only after a user selects a channel.
*   **User Interface:**
    *   The application is mobile-responsive.
    *   A simple, clean layout with a channel list and a video player view.
*   **Error Handling & Feedback:**
    *   **Application-level:** An `ErrorBoundary` is in place to prevent the entire app from crashing due to rendering errors. It provides a "Reload" option.
    *   **Stream-level:** A toast notification system is implemented to inform users about stream failures (e.g., "Failed to stream. It may be offline or geo-blocked.").
    *   **Loading States:** Loading indicators are present for both fetching the channel list and loading a video stream.

## 3. Technical Setup

*   **Framework:** React with Vite and TypeScript.
*   **Deployment:** A GitHub Actions workflow (`.github/workflows/deploy.yml`) is configured to automatically build and deploy the application to the `gh-pages` branch.
*   **Dependencies:**
    *   `react-player`: For video streaming.
    *   `react-hot-toast`: For user notifications.
*   **Git:** The project is a Git repository, connected to a remote on GitHub. A `.gitignore` file is configured for a standard Vite/React project.

## 4. Areas for Future Improvement

*   **Data Source:** The current channel list is limited. The next step would be to integrate the more comprehensive JSON databases from the `iptv-org` repositories to provide a richer channel selection.
*   **Player Robustness:** Further enhance the player to handle different stream formats and provide more specific feedback on playback errors.
*   **User Onboarding:** Improve the initial user experience with a welcome message or a guide on how to use the app.
*   **Routing:** Implement more robust routing to handle different views (e.g., a dedicated player page for a channel).
*   **UI Polish:** Continue refining the UI for a better user experience across all devices.
