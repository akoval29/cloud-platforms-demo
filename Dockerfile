FROM node:20-alpine

WORKDIR /app

ARG NEXT_PUBLIC_PLATFORM_NAME=Localhost
ENV NEXT_PUBLIC_PLATFORM_NAME=$NEXT_PUBLIC_PLATFORM_NAME

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
