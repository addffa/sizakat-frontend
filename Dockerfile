FROM node:14.1-alpine AS builder

WORKDIR /app/frontend

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.19-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/frontend/build /app/frontend

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
