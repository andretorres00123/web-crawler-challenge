# Web-Crawler-Challenge
Web Crawler implemented with NextJS

This project use scraping techniques to extract the first 30 entries from https://news.ycombinator.com/ .

A live demo of this project is deployed in .

## Install dependencies
```
yarn install
```

## Run Tests
```
yarn test
```

## Local Development

Note: You can check the env variables in the `.env.example` file
```
yarn dev
```

## Production Mode

### Build Project
```
yarn build
```

### Start Project
```
yarn build
```

## Run project with Docker

You can run this project through the `docker-compose` file, this will build a Docker image and run up a container.
Also you can set new env variables in the `docker-compose` file.
```
docker-compose up -d webCrawler
```
