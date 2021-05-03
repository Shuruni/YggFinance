FROM node:14-alpine
WORKDIR /usr/src/app
RUN npm install -g localtunnel
COPY run.sh ./
RUN apk add --no-cache bash
CMD [ "bash", "run.sh" ]