FROM node:alpine
WORKDIR src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.15-alpine

MAINTAINER Team Coblerone <coblerone@dev.ch>

RUN mkdir /etc/nginx/cert
COPY  --from=0 src/app/build /usr/share/nginx/html
COPY cert/dev /etc/nginx/cert
COPY default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]
