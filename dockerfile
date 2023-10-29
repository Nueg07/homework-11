FROM node:20.9.0-slim

WORKDIR /index

COPY package*.json ./

EXPOSE 3000

CMD [ 'npm', 'run' 'start-docker']