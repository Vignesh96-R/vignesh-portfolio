# Dockerfile
FROM nginx:alpine

# Clear default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular dist files to NGINX html directory
COPY dist/my-angular-app/browser/browser /usr/share/nginx/html
EXPOSE 80
