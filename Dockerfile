FROM node:dubnium-stretch-slim

WORKDIR /home/app

RUN apt update \
    && apt install -y curl ffmpeg build-essential git \
    && rm -rf /var/lib/apt/lists/*

# This is on a separate line because youtube-dl needs to be frequently updated
RUN apt update \
    && apt install -y youtube-dl \
    && rm -rf /var/lib/apt/lists/*

# Only install node_modules if the package.json changes
COPY package.json package-lock.json ./
RUN npm ci

ADD src/scripts/ytdl-cleaner /etc/cron.daily/ytdl-cleaner
COPY . ./
RUN mkdir -p public/temp \
    && npm run build \
    && chmod 755 /etc/cron.daily/ytdl-cleaner

ENV EXPIRATION 7
EXPOSE 3000
CMD [ "npm", "start" ]
