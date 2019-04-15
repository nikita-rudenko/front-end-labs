FROM node:10-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build:prod

FROM nginx:1.15.5-alpine
COPY --from=build-stage /app/dist /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
