# This project is incomplete

The intended final functionality of this project is to incorporate user auth for a visualizer experiement.

## Features utiltized

- [PNPM](https://pnpm.io) workspaces
- Datastore via Postgres and [Prisma](https://prisma.io) ORM
- API package via [NestJS](https://nestjs.com/)
- Web frontend package served by React

## Getting Started

- Install [PNPM](https://pnpm.io) if not on your system already `npm i -g pnpm`
- Copy env file with `cp .env.sample .env` and fill it in with your postgres server URL

Then setup and run the development server via the following steps:

```bash
pnpm recursive install
pnpm generate:version
pnpm start:client
pnpm start:server
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result. NestJS runs off of port 8000 by default.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Particular endpoint is a hardcoded demo page.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Tooling used

- [Prisma](prisma.io)
- [PNPM workspaces](https://pnpm.io/workspaces)
