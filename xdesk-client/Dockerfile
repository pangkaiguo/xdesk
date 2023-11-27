FROM node:17.7.2 as builder
WORKDIR /code/app
COPY package.json ./
RUN yarn
COPY ./ .
RUN yarn build

FROM node:17.7.2 as runner
WORKDIR /xdesk-client
ENV NODE_ENV production
COPY --from=builder /code/app/next.config.js ./
COPY --from=builder /code/app/public ./public
COPY --from=builder /code/app/.next ./.next
COPY --from=builder /code/app/node_modules ./node_modules
COPY --from=builder /code/app/package.json ./package.json

EXPOSE 3003
CMD ["yarn", "run", "start"]
