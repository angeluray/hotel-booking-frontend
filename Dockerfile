FROM node:16.15.1-alpine3.15

USER node
WORKDIR /home/node
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]