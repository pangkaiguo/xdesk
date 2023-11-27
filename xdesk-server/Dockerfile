FROM node:17.7.2 as builder
WORKDIR /code/app
COPY package*.json ./
COPY prisma ./prisma/
RUN yarn && yarn global add node-pre-gyp
RUN yarn prisma generate
COPY ./ .
RUN yarn build

FROM node:17.7.2 as runner
WORKDIR /xdesk-server
ENV NODE_ENV production
COPY --from=builder /code/app/node_modules ./node_modules
COPY --from=builder /code/app/package*.json ./
COPY --from=builder /code/app/dist ./dist
COPY --from=builder /code/app/prisma ./prisma

EXPOSE 3333
# CMD ["yarn", "run", "start:prod"]
CMD ["yarn", "run", "start:migrate:prod"]
