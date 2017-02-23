FROM node:6.9.1
WORKDIR /usr/src
COPY package.json /usr/src/package.json
RUN cd /usr/src && npm i
COPY src /usr/src/src
CMD ./node_modules/.bin/mocha src/test/*.js
