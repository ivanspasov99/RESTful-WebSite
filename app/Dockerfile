FROM node as builder

WORKDIR /app

# allows us to take advantage of cached Docker layers
COPY package*.json ./

# install the dependencies
RUN npm install

# copying the rest of the files
COPY ./ .

RUN npm run build

FROM nginx

WORKDIR /app

COPY --from=builder /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

