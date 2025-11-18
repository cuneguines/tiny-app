FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Install SonarScanner
RUN npm install -g sonar-scanner

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
