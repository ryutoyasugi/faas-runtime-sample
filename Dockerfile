FROM node:slim

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY index.js ./index.js

EXPOSE 8080
CMD [ "node", "index.js" ]
