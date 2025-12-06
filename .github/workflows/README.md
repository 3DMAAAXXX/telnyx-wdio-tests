# Telnyx WebdriverIO Tests

Automated tests for Telnyx Voice AI application using WebdriverIO.

## Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional)

## Installation

```bash
npm install
```

## Running Tests

### All browsers
```bash
npm run test:all
```

### Specific browser
```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

### Single test file
```bash
npm run test:single test/specs/telnyx.test.js
```

### With Docker
```bash
# Build and run
docker-compose up

# Or using npm scripts
npm run docker:build
npm run docker:run
```

## Allure Reports

### Generate and open report
```bash
npm run allure:generate
npm run allure:open
```

### Serve report
```bash
npm run allure:serve
```

## CI/CD

Tests run automatically on:
- Push to main/develop branches
- Pull requests to main
- Manual workflow dispatch

Reports are automatically published to GitHub Pages.

## Project Structure

```
├── test/
│   ├── specs/           # Test files
│   └── pageobjects/     # Page Object files
├── wdio.conf.js         # Base config
├── wdio.chrome.conf.js  # Chrome config
├── wdio.firefox.conf.js # Firefox config
├── wdio.edge.conf.js    # Edge config
├── wdio.docker.conf.js  # Docker config
├── Dockerfile           # Docker image
├── docker-compose.yml   # Docker compose
└── .github/
    └── workflows/
        └── tests.yml    # GitHub Actions workflow
```

## License

ISC