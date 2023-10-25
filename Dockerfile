FROM nginx:stable-alpine

WORKDIR /app

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf.template /etc/nginx/templates/
COPY build /usr/share/nginx/html

EXPOSE 80