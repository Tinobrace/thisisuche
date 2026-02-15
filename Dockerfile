# Stage 1: Build the application
# Why multi-stage? Keeps final image small (production best practice)
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (Docker layer caching optimization)
# Why separate? If code changes but deps don't, Docker reuses cached layers
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx (production web server)
# Why Nginx? Lightweight, fast, industry standard for serving static sites
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health check (DevOps best practice)
# Why? Kubernetes/Docker Swarm can detect if container is healthy
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]