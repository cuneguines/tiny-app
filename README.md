# Tiny App

## Overview

Node.js + MySQL application deployed using Docker containers with a CI/CD pipeline powered by GitHub Actions. Development environment includes monitoring (Prometheus, Grafana) and code quality analysis (SonarQube).

## Project Structure

```
tiny-app/
├─ backend/
│  ├─ routes/users.js
│  ├─ tests/
│  │  ├─ users.test.js
│  │  └─ setup.js
│  ├─ db.js
│  ├─ index.js
├─ .github/workflows/ci.yml
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
├─ prometheus.yml
├─ sonar-project.properties
├─ README.md
```

## Prerequisites

* Docker & Docker Compose
* Node.js v18+
* GitHub account for Actions

## Setup & Development

```bash
git clone https://github.com/cuneguines/tiny-app.git
cd tiny-app
docker compose up -d
```

* App runs at `http://localhost:3000`
* Prometheus: `http://localhost:9090`
* Grafana: `http://localhost:3001`
* SonarQube: `http://localhost:9000`

## Running Tests

```bash
docker compose run --rm backend npm test
```

## CI/CD Pipeline

* On push to `main`, GitHub Actions runs tests, lints code, scans with SonarQube, and deploys to a self-hosted EC2 runner.

## Deployment (Production)

* Only app and DB containers are deployed in production; monitoring tools are used only in development.

## License

MIT
