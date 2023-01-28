# Observations Predictor

This application serves as an interactive frontend built with Nuxt 3, designed to visualize predicted patterns of wildlife observations. Users can input specific species and geographical locations to explore how observation probabilities might change over time through dynamic charts and an integrated map. The primary goal is to offer insights into biodiversity trends and ecological forecasting based on a robust backend prediction service.

## Prerequisites

**Crucial:** This frontend application is a client that relies entirely on a separate, dedicated backend prediction service.
*   The backend service must be running and accessible locally at `http://localhost:8080`.
*   It is expected to expose an endpoint, typically `/predictions`, that accepts `place` and `species` as query parameters.
*   The backend's response should include structured data containing observation predictions, along with optional metadata like `place_json` and `species_json` for autocorrection/context. Without this backend, the application's core functionality will not operate.

## Features

*   **Dynamic Species & Location Search:** Users can effortlessly search for various species and locations. The system is designed to provide autocorrection hints for both geographical places and species names, enhancing the user experience.
*   **Interactive Data Visualization (Highcharts):** Utilizes `nuxt-highcharts` to render sophisticated and interactive time-series charts. These charts display the predicted percentage of observations for the selected species and location across different years, allowing for in-depth analysis of trends.
*   **Integrated Geospatial Mapping (Mapbox GL JS):** Incorporates `mapbox-gl` for an interactive map interface. This map visually represents urban areas and provides a geographical context for the observations, offering an additional layer of data interpretation. While currently showing general urban areas, it is extensible for more specific observation data points.

## Technologies Used

*   **Framework:** Nuxt 3 (Vue 3, Vite, Nitro)
*   **Styling:** Tailwind CSS (integrated via `@nuxt/ui`)
*   **UI Components:** Nuxt UI
*   **Charting Library:** Highcharts (`nuxt-highcharts`)
*   **Mapping Library:** Mapbox GL JS (`nuxt-mapbox`)
*   **Language:** TypeScript
*   **Package Manager:** Yarn

## Troubleshooting

*   **Backend Connection Error:** If charts do not load, network requests fail, or you see "Failed to fetch" errors, verify that the backend prediction service is actively running on `http://localhost:8080`. Check the backend's logs for any errors.
*   **Mapbox Token Issues:** If the map does not render, ensure your internet connection is stable. The application uses a public Mapbox access token. If you encounter authentication issues or if the map functionality is critical for a production environment, consider providing your own token via environment variables or updating the `mapboxAccessToken` in `nuxt.config.ts`.
*   **Dependency Installation Failures:** Ensure you have Node.js (v18 or higher recommended) and Yarn installed. Clear your Yarn cache (`yarn cache clean`) and try `yarn install` again if issues persist.
*   **Development Server Startup Problems:** If `yarn dev` fails to start, check the console output in `app.log` (if running in background) or directly in your terminal for specific error messages. Common issues include port conflicts (if port 3000 is already in use) or incorrect dependency installations.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

For more in-depth Nuxt 3 documentation, please refer to the official [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction).
