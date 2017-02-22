FROM node:6.9.1
WORKDIR /usr/src
COPY src /usr/src/src
COPY package.json /usr/src/package.json
RUN cd /usr/src && npm i
CMD ./node_modules/.bin/mocha src/test/*.js
