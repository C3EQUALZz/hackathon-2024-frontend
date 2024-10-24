FROM node:lts-alpine3.19 AS build

WORKDIR /app

COPY yarn.lock package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

FROM nginx:1.24-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/template /usr/share/nginx/html

EXPOSE 80
