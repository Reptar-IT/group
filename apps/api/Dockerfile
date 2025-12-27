FROM node:20-alpine

WORKDIR /app

COPY apps/api/package*.json ./
RUN npm install

COPY apps/api/prisma ./prisma
COPY apps/api/prisma.config.ts ./

RUN npx prisma generate

COPY apps/api .

EXPOSE 3001

CMD ["npm", "run", "dev"]
