#!/bin/bash

# Build all project images
docker-compose build

# Login to DockerHub.
# As should be obvious, only Shuruni (aka: Alan Holman) can do this.
# if you want to publish somewhere else, please retag the images for your repo
docker login -u shuruni

# Push all built images
docker-compose push