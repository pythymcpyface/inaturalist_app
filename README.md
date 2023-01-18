# Observations Predictor

A Nuxt 3 application for visualizing wildlife observation predictions. This tool allows users to search for species and locations to view predictive trends over time.

## Prerequisites

**Important:** This frontend application acts as a client for a separate backend service.
- You must have the backend prediction service running locally on `http://localhost:8080`.
- The application expects the backend to provide prediction data for the queried species and location.

## Features

- **Species & Location Search:** Query specific wildlife data.
- **Data Visualization:** Interactive charts showing observation probabilities over time.
- **Map Integration:** (In Progress) Visualizing observations on a map.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
