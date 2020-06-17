FROM node:10.15.3-alpine
MAINTAINER Andre Torres "aectorres@udlanet.ec"

RUN mkdir -p /var/app
WORKDIR /var/app
COPY . /var/app
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 8080
