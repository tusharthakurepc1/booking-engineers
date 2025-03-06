# Use official Node.js image
FROM node:16

# Set working directory
WORKDIR /app

# Create shared folder
RUN mkdir shared

# Copy the rest of the applications
COPY . .

# Install dependencies
RUN npm install

COPY nginx.conf shared/nginx.conf

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]
