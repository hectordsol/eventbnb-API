FROM node:16

WORKDIR /appdocker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5004

CMD [ "npm", "start"]