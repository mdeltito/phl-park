FROM kyma/docker-nginx
MAINTAINER Michael J. Del Tito "mdeltito@gmail.com"

COPY ./dist /var/www

EXPOSE 80 443
CMD ["nginx"]
