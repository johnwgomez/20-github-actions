# 20-github-actions

## Description

A full-stack coding quiz application built with Node.js, TypeScript, and Vite, featuring GitHub Actions CI/CD integration and automated deployment to Render.

This challenge demonstrates:
- Component-based front-end development with Vite
- Back-end API with Express and Mongoose
- Automated testing with Cypress
- Continuous integration via GitHub Actions
- Deployment with Render and Render Deploy Hooks

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Testing](#testing)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/johnwgomez/20-github-actions.git
   ```
2. Navigate to the root directory and install dependencies:
   ```
   npm install
   ```

## Usage

To start the development environment:
```
npm run dev
```

To build for production:
```
npm run build
```

To start the server:
```
npm run start
```

## Tech Stack

- Node.js
- TypeScript
- Express
- Vite
- React
- MongoDB (via Atlas)
- Cypress (testing)
- GitHub Actions (CI/CD)

## Testing

Run Cypress tests in GUI:
```
npm run cypress:open
```

Run Cypress tests in headless mode:
```
npm run cypress:run
```

## Deployment

This app is deployed using Render and auto-deploys via GitHub Actions when changes are merged to `main`.

Live Site: [https://two0-github-actions-iq4l.onrender.com](https://two0-github-actions-iq4l.onrender.com)


## License

MIT License
