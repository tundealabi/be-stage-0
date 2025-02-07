# be-stage-0

HNG Stage 0 Backend - Develop a Public API to Retrieve Basic Information

## Getting Started

To get started with the repository, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/tundealabi/be-stage-0.git
```

2. Change into the project directory:

```bash
cd be-stage-0
```

3. Start the Node JS server:

```bash
npm start | yarn start
```

## 📜 Endpoint

## `/` - Base Path

This endpoint returns basic information in a structured format as a JSON response.

- URL: http://localhost:4300
- Method: GET
- Status Code: 200 (OK)
- Response:

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "<https://github.com/yourusername/your-repo>"
}
```

## 💻 Built with

Technologies used in the project:

- Javascript/Node Js - <https://hng.tech/hire/nodejs-developers>
