# Stage 1: Python build
FROM python:3.12.2-bullseye AS python-build

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app/api
COPY . /app/api

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install python3-dev default-libmysqlclient-dev build-essential pkg-config

RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt

#Stage 2: Node build
FROM node:18 AS node-build

WORKDIR /app/web-app
COPY . /app/web-app/

RUN npm run prod

#Stage 3: Final build
FROM python:3.12.2-bullseye AS final

WORKDIR /app

COPY --from=python-build /app/api /app/api
COPY --from=node-build /app/web-app/client/dist /app/api/client

EXPOSE 8000