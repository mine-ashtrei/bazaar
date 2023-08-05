# Use official Node.js 14 as the base image
FROM node:18.13

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

COPY tsconfig.json ./

# Install the application dependencies inside the container
RUN npm install

# Copy the rest of the application code into the container
COPY ./src ./src

# Transpile TypeScript into JavaScript
RUN npm run build

# Expose port 5000 for the application
EXPOSE 5000

# Define the command to run the application
CMD [ "node", "dist/index.js" ]