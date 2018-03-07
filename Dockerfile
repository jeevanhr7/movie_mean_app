FROM node:7

WORKDIR /app

# Install Mean.JS Prerequisites
RUN npm install -g bower
RUN npm install -g pm2


# Install Mean.JS packages
COPY package.json /app
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD bower.json /app/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /app

# currently only works for development
ENV NODE_ENV production

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
CMD pm2 start node server/app.js

