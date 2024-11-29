# First Stage: Build the App
FROM node:22.11.0 AS builder

WORKDIR /app

COPY package*.json .

# Install dependencies npm
RUN npm ci --ignore-scripts

COPY . .

# Build the application
RUN npm run build:static:staging


# Second Stage: Setup the runtime
FROM nginx:stable-alpine AS staging-stage

WORKDIR /app

COPY --from=builder /app/dist/ /usr/share/nginx/html

# Copiez le fichier de configuration Nginx personnalisé
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]