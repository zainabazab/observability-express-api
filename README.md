
# Observability & Modular Express API

A RESTful API built with Node.js, Express.js, and TypeScript, demonstrating modular backend architecture, custom middleware, request observability, and API key authentication.

## Overview

This project demonstrates how to build a structured and secure Express.js API using a separation-of-concerns architecture.

It provides CRUD operations for user resources, custom request logging, JSON body parsing, and API key authentication.

## Features

- Express.js with TypeScript
- Modular architecture (Routes, Controllers, Services)
- RESTful CRUD operations
- Custom global observability middleware
- ISO 8601 request timestamps
- HTTP method and URL path logging
- Request execution time measurement
- API key authentication using x-api-key
- Environment variable configuration with dotenv
- Standard HTTP status codes and JSON responses

## Tech Stack

- Node.js
- Express.js
- TypeScript
- dotenv
- ts-node-dev

## Project Structure

```text
src/
├── server.ts
├── app.ts
├── routes/
│   └── userRoutes.ts
├── controllers/
│   └── userController.ts
├── services/
│   └── userService.ts
├── middleware/
│   ├── logger.ts
│   └── requireAPIKey.ts
└── types/
    └── user.ts
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd observability-express-api
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Configure your `.env` file:

```env
PORT=3000
API_KEY=your-secret-api-key
```

## Running the Application

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Production:

```bash
npm start
```

## API Endpoints

All `/api` endpoints require the `x-api-key` header.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users | Retrieve all users |
| GET | /api/users/:id | Retrieve a user |
| POST | /api/users | Create a user |
| PUT | /api/users/:id | Update a user |
| DELETE | /api/users/:id | Delete a user |

## Authentication

Include your API key in every API request:

```http
x-api-key: your-secret-api-key
```

Unauthorized requests receive HTTP 401:

```json
{
  "success": false,
  "message": "Unauthorized: Invalid or missing API key"
}
```

## Observability

The custom logging middleware records:

- ISO 8601 timestamp
- HTTP request method
- Request URL path
- Execution time in milliseconds
- HTTP response status code

Example:

```text
[2026-11-22T01:30:45.123Z] GET /api/users - 4ms - Status: 200
```

## Architecture

The application follows a layered architecture:

- Routes: Define API endpoints.
- Controllers: Handle incoming requests and outgoing responses.
- Services: Contain business logic and data operations.
- Middleware: Handle logging and API key authentication.

## Data Storage

This project currently uses an in-memory array as mock storage. Data resets when the server restarts.

## Future Improvements

- PostgreSQL database integration
- Prisma ORM
- Automated API testing
- Request validation
- Centralized error handling
- Rate limiting
- Improved authentication and authorization

## Learning Objectives

This project was developed as part of backend development training to practice Express.js, TypeScript, modular architecture, middleware pipelines, REST APIs, security, and observability.
