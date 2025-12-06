FROM node:18-alpine

# Встановлюємо curl для healthcheck
RUN apk add --no-cache curl

# Створюємо робочу директорію
WORKDIR /app

# Копіюємо тільки package.json
COPY package.json ./

# Встановлюємо залежності (це створить package-lock.json і встановить для Linux)
RUN npm install

# Копіюємо решту файлів (node_modules не копіюється завдяки .dockerignore)
COPY . .

# Створюємо директорії для результатів
RUN mkdir -p allure-results allure-report

# Запускаємо тести
CMD ["npm", "run", "test:docker"]
