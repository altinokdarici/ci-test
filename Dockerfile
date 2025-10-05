FROM node:24.0.0-alpine

WORKDIR /app
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]