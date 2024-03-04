FROM dunglas/frankenphp

ENV SERVER_NAME=:80
ENV APP_ENV=prod
#RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
#ENV APP_RUNTIME=Runtime\\FrankenPhpSymfony\\Runtime
#ENV FRANKENPHP_CONFIG="worker ./public/index.php"

COPY ./ /app/
