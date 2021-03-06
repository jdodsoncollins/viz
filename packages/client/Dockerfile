# Builder
FROM node:16.13.1-alpine3.14 as builder

# Copy client and domain + lib packages
WORKDIR /usr/src/viz/
COPY .eslintrc .
COPY .eslintignore .
COPY package.json .
COPY tsconfig.json .
COPY pnpm-lock.yaml .
COPY VERSION .

COPY packages/client packages/client
COPY packages/domain packages/domain
COPY packages/lib packages/lib

# Install domain + lib + client dependencies
RUN pnpm install --pure-lockfile --non-interactive

# Build common packages
RUN pnpm build:common

# Build client then
WORKDIR /usr/src/viz/packages/client
RUN pnpm build

# Runner
FROM nginx:alpine as runner

# Copy the nginx configuration
COPY packages/client/nginx.conf /etc/nginx/nginx.conf

# Copy the built static files to nginx + dictionaries
COPY --from=builder /usr/src/viz/packages/client/dist /usr/share/nginx/html
