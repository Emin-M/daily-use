## installing initial image
FROM node:alpine as builder

## creating working directory
WORKDIR '/app'

## copying package.json for installing dependencies
COPY package*.json ./

## installing dependencies
RUN npm install

## copying all files into working directory(image)
COPY . .

## building
RUN npm run build

## installing initial image
FROM nginx

## exposing port for AWS
EXPOSE 80

## getting builded files and getting ready for deployment
COPY --from=builder /app/build /usr/share/nginx/html