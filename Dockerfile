FROM node:18-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN mkdir -p allure-results allure-report

CMD ["npm", "run", "test:docker"]
