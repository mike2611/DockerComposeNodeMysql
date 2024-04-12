FROM node:18 as build-stage 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:alpine
# Remove default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf
# Copy your custom NGINX configuration
COPY raza-app.conf /etc/nginx/conf.d 
COPY --from=build-stage /app/dist /usr/share/nginx/html

