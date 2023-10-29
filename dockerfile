FROM node:20.9.0-slim

WORKDIR /app

COPY package*.json ./

EXPOSE 3000

CMD [ 'npm', 'start' ]