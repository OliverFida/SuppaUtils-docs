# syntax=docker/dockerfile:1

# Stage 1: Base image.
## Node + Bun
FROM oven/bun:latest AS base
ENV FORCE_COLOR=0
WORKDIR /opt/docusaurus

# Stage 2a: Development mode.
FROM base AS dev
WORKDIR /opt/docusaurus
EXPOSE 3000

## Falls node_modules fehlt: bun install, danach bun run start
CMD [ -d "node_modules" ] && bun run start -- --host 0.0.0.0 --poll 1000 || bun install && bun run start -- --host 0.0.0.0 --poll 1000

# Stage 2b: Production build mode.
FROM base AS prod
WORKDIR /opt/docusaurus

## Copy source
COPY . /opt/docusaurus/

## bun legt kein Lockfile fest wie pnpm --frozen-lockfile.
## bun install ist deterministisch – entspricht pnpm install --frozen-lockfile.
RUN bun install

## Build
RUN bun run build

# Stage 3a: Serve with `docusaurus serve`.
FROM prod AS serve
EXPOSE 3000
CMD ["bun", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]

# Stage 3b: Serve with Caddy.
FROM caddy:2-alpine AS caddy
COPY --from=prod /opt/docusaurus/Caddyfile /etc/caddy/Caddyfile
COPY --from=prod /opt/docusaurus/build /var/docusaurus
