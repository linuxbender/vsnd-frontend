FROM node:alpine as build-deps
WORKDIR src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:stable

MAINTAINER Team Coblerone <coblerone@dev.ch>

RUN mkdir /etc/nginx/cert
COPY --from=build-deps src/app/build /usr/share/nginx/html
COPY cert/dev /etc/nginx/cert
COPY default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]
