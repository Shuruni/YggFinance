# YggFinance Source Code

## Running the Project

- RUN `docker-compose up` in this directory.
- Access @ <https://ygg-dev.loca.lt>
- Endpoints:
  - webapp:             `/`
  - budgeting-service:  `/budgeting-service`
  - networth-service:   `/networth-service`
  - planning-service:   `/planning-service`

## Building the Project

- RUN `docker-compose build` in this directory.

## Pushing a new release

- RUN `bash make-release.sh` in this directory.
- (Note: Assumes that you own the DockerHub repo the images are tagged for and are able to log into it.)
