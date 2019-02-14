FROM node:9.6.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
RUN npm rebuild node-sass

EXPOSE 3000
CMD ["npm", "start"]
