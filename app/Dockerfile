FROM node:14.10-slim as builder

WORKDIR /app

# allows us to take advantage of cached Docker layers
COPY package*.json ./

# install the dependencies
RUN npm install

# copying the rest of the files
COPY . .

# create the execution file
RUN npm run build


FROM nginx:1.19.2

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# tells Nginx to stay in the foreground
CMD ["nginx", "-g", "daemon off;"]


