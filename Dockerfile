FROM node AS development

RUN apt update && apt upgrade -y && apt install bash libgtk2.0-0 libgtk-3-0 \
    libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y

RUN curl https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o /tmp/google-chrome.deb
RUN apt-get install -y /tmp/google-chrome.deb

WORKDIR /usr/src/app

COPY . .

RUN npm install --location=global npm@latest

RUN npm install --location=global typescript

FROM node as production

RUN apt update && apt upgrade -y && apt install bash libgtk2.0-0 libgtk-3-0 \
    libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y

RUN curl https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o /tmp/google-chrome.deb
RUN apt-get install -y /tmp/google-chrome.deb

WORKDIR /usr/src/app

COPY . .

RUN npm install --location=global npm@latest

RUN npm install --location=global typescript
