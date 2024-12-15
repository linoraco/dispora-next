# Base Image
FROM node:20 AS base

# Install necessary build tools
RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production Image
FROM node:20 AS production

WORKDIR /app

# Install libc6-compat for compatibility with Node.js
RUN apk add --no-cache libc6-compat

# Set production environment
ENV NODE_ENV=production

# Copy necessary files from the base stage
COPY --from=base /app/package.json /app/package-lock.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

# Create a non-root user and set permissions
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
USER nextjs

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
