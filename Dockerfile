# base image
FROM node:10.15.2 

# set working directory
RUN mkdir /app
WORKDIR /app

# install and cache app dependencies
COPY . /app

RUN npm install

# start app
CMD ["npm", "start"]

EXPOSE 3500