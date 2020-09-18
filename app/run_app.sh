#!/bin/sh

cd ./front-end-spring-boot/app

export DOCKER_HOST=127.0.0.1:2375

# if we want to use docker-compose without sudo, we need to add docker to group????
# https://stackoverflow.com/questions/29101043/cant-connect-to-docker-from-docker-compose
docker-compose up -d