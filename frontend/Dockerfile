# Stage 1: Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package dependencies
COPY package*.json ./

# Install dependencies cleanly
RUN npm i

# Copy source code
COPY . .

# Build the Vite React application
RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "host"]

