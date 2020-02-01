FROM node:chakracore-10.13.0

COPY . hello-world

WORKDIR /hello-world

ARG PORT=8667

CMD npm run start
EXPOSE $PORT
