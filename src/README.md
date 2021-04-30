# YggFinance Source Code

## Building & Running the Project

- RUN `docker-compose up -d --build` in this directory.
- Access @ <https://ygg-dev.loca.lt>
- Endpoints:
  - webapp:             `/`
  - budgeting-service:  `/budgeting-service`
  - networth-service:   `/networth-service`
  - planning-service:   `/planning-service`

## Monitoring the Running Project

- RUN `docker-compose logs -f` in this directory.
- You can stop monitoring by using Ctrl+C or closing the console window

## Safely Stopping the Running Project

- RUN `docker-compose down` in this directory.

## Pushing a new release

- RUN `bash make-release.sh` in this directory.
- (Note: Assumes that you own the DockerHub account the images are tagged for and you are able to log into it.)
