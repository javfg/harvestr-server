# harvestr-server dockerfile
# last update 2021-03-15

FROM node:current-alpine3.13
LABEL maintainer='Javier Ferrer <javier.f.g@um.es>'

WORKDIR /home/app

COPY . .

RUN yarn

EXPOSE 8081

CMD yarn start
