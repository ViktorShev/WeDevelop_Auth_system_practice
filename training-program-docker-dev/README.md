# WeDevelop's Full Stack Training Program - Docker Development Environment

This repository contains a Docker Compose configuration file for usage with
[WeDevelop's Full Stack Training Program](https://github.com/WeDevelop-ARG/full-stack-beginner-program).

The main goal is to learn how to use [Docker](https://docs.docker.com/) on a typical Development Environment,
while also learning how to fix common issues that occur on a daily basis for a Full Stack developer.

## WARNING!

**This repository and its companions contain errors introduced on purpose!**
Please read on to find out how to use this repository.

## Rules

- After cloning any needed repositories you may only use commands from the Docker CLI.
- The commands you're allowed to use are `docker` and `docker-compose`, along with any
  parameters.
- DO NOT cheat by executing commands that are not from Docker (such as `npm`, `npx`, `rm`, etc) from outside of the containers.
- _(Linux only)_ DO NOT execute Docker commands as the superuser! (Don't use `sudo docker` or `sudo docker-compose`).
  You'll need to add your user to the `docker` group on your operative system.

## Usage

**NOTE:** This repository is meant to be used in conjuction with the
  [Frontend](https://github.com/WeDevelop-ARG/training-program-frontend) and
  [Backend](https://github.com/WeDevelop-ARG/training-program-backend) repositories.

1. Install and familiarize yourself with [Docker Engine](https://docs.docker.com/engine/)
1. Install and familiarize yourself with [Docker Compose](https://docs.docker.com/compose/)
1. Clone this repository
1. Move into the new clone
1. Use the command `docker-compose up` to start exercising your Docker skills :)
