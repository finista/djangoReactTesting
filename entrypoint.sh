#!/bin/sh

# Entrypoint shell file for application deployment
# It collects static files and migrates the DB if needed before running daphne

set -e
cd ./api

python manage.py migrate
python manage.py collectstatic --noinput

daphne -b 0.0.0.0 -p 8000 api.asgi:application