FROM node:21.7.3 AS fe_builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:21.7.3 AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY --from=fe_builder /app/.next ./.next
COPY --from=fe_builder /app/public ./public
COPY --from=fe_builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["yarn", "start"]
