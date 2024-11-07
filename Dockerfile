FROM node:21.7.3 AS fe_builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:21.7.3 AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY package.json  package-lock.json ./
RUN npm ci --only=production --legacy-peer-deps

COPY --from=fe_builder /app/.next ./.next
COPY --from=fe_builder /app/public ./public
COPY --from=fe_builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "start"]
