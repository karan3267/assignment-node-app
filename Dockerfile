FROM node:18-alpine
WORKDIR /app

# Install dependencies separately for caching
COPY package*.json ./
RUN npm install --production

# Copy application files
COPY . .

# Health check
HEALTHCHECK --interval=30s --timeout=5s \
  CMD curl -f http://localhost:5000/api/colors/red || exit 1

EXPOSE 5000
CMD ["node", "server.js"]