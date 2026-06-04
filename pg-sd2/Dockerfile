FROM node:latest
WORKDIR /src
COPY package*.json /src/
RUN npm install -g supervisor && npm install && npm install supervisor
COPY . /src
RUN rm -rf /src/node_modules && npm install
EXPOSE 3000
