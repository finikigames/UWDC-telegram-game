FROM node:9.5-slim

ENV PORT="3000"
ENV DEBUG="app:*"

RUN mkdir -p /app /app/public

COPY public/ /app/public/
COPY app.js package.json /app/

WORKDIR /app
RUN npm install --unsafe-perm

EXPOSE 3000 
CMD /app