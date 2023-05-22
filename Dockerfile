# Stage 1 installeren en builden van de website

FROM node:19.6.1 as build

WORKDIR /bloom_brewers
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 inladen van de docker-image
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /bloom_brewers/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

