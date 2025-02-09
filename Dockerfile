# Use a Node.js base image with Yarn installed
FROM node:20.12.2-alpine

  # Set the working directory
WORKDIR /usr/src/app

  # Copy package.json and yarn.lock files
COPY ./package*.json  ./
#COPY ./yarn.lock  ./

RUN yarn install

  # Copy the rest of the application files
COPY ./ ./

# clean cache
RUN yarn cache clean

# Build the app for production
RUN yarn build

  # Expose the app port
EXPOSE 3000

  # Start the app
CMD ["yarn", "start"]
