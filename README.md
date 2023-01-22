# Observations Predictor

A Nuxt 3 application for visualizing wildlife observation predictions. This tool allows users to search for species and locations to view predictive trends over time.

## Prerequisites

**Important:** This frontend application acts as a client for a separate backend service.
- You must have the backend prediction service running locally on `http://localhost:8080`.
- The application expects the backend to provide prediction data for the queried species and location.

## Features

- **Species & Location Search:** Query wildlife data with autocorrection support for place and species names.
- **Data Visualization:** Interactive Highcharts visualizations showing observation probabilities over time.
- **Map Integration:** Interactive Mapbox map displaying urban areas and observation contexts.

## Troubleshooting

- **Backend Connection Error:** If charts do not load or you see network errors, ensure the backend service is running on `http://localhost:8080`.
- **Mapbox Token:** The application uses a public access token. If the map does not load, check your internet connection or update the token in `nuxt.config.ts`.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm run dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm run build

# bun
bun run build
```

Locally preview production build:

```bash
# yarn
yarn preview

# npm
npm run preview

# pnpm
pnpm run preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
