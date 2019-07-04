# TODO: header

FROM node
LABEL maintainer="Javier Ferrer <javier.f.g@um.es>"

# Prepare startup Application
RUN mkdir -p /home/app/src

# Copy source
ADD package.json /home/app
ADD src/. /home/app/src

# Install packages
RUN cd /home/app; npm install

# Publish the following ports
EXPOSE 8081

# Working directory
WORKDIR /home/app

CMD npm start
