#Stage 1: React build
FROM node:18 AS node-build

WORKDIR /app/web-app
COPY . /app

RUN npm install
RUN npm run prod

# Stage 2: Python build
FROM python:3.12.2-bullseye AS python-build

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app/api
COPY . /app

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install python3-dev default-libmysqlclient-dev build-essential pkg-config

RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt

# Compile django app
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate
RUN python3 manage.py collectstatic --noinput

#Stage 3: Final build
WORKDIR /app
COPY --from=node-build /app/web-app/client/dist /app/api/client/dist

EXPOSE 8000