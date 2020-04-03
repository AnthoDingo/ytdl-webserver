<h1 align="center">
  📻 ytdl-webserver

  [![Build Status](https://badgen.net/travis/AnthoDingo/ytdl-webserver/master?icon=travis&label=master)](https://travis-ci.com/AnthoDingo/ytdl-webserver)
  [![Build Status](https://badgen.net/travis/AnthoDingo/ytdl-webserver/dev?icon=travis&label=dev )](https://travis-ci.com/AnthoDingo/ytdl-webserver)

  [![Docker Pulls](https://badgen.net/docker/pulls/anthodingo/ytdl-webserver?icon=docker&label=pulls)](https://hub.docker.com/r/anthodingo/ytdl-webserver)
  [![Docker Stars](https://badgen.net/docker/stars/anthodingo/ytdl-webserver?icon=docker&label=stars)](https://hub.docker.com/r/anthodingo/ytdl-webserver)
  [![Docker Image Size (tag)](https://badgen.net/docker/size/anthodingo/ytdl-webserver/latest?icon=docker&label=latest)](https://hub.docker.com/r/anthodingo/ytdl-webserver/tags?page=1&name=latest)
  [![Docker Image Size (tag)](https://badgen.net/docker/size/anthodingo/ytdl-webserver/dev?icon=docker&label=dev)](https://hub.docker.com/r/anthodingo/ytdl-webserver/tags?page=1&name=dev)

</h1>

<p align="center">
  Webserver for downloading youtube videos. Ready for docker.
  <a href="https://github.com/Algram/ytdl-webserver">Original project : Algram/ytdl-webserver</a>
</p>

## Demo
If you have questions, read the [blog post](https://blog.rphl.io/selfhosted-youtube-downloader-with-docker/).

![Demovideo](http://imgur.com/iEpA1oQ.gif)

## Installation
### As a server
``` bash
npm install && npm start
```

### As a docker image
#### Basic
```
docker run --name ytdl -d -p 3000:3000 anthodingo/ytdl-webserver
```

#### Advanced
Build the docker image, create a directory to hold and access the downloaded videos on the host, and then start a container instance of the image.  
```
docker build -t <your username>/ytdl-webserver .
mkdir /tmp/videos
docker run --name ytdl -v /tmp/videos:/home/app/public/temp -p 3000:3000 -d <your username>/ytdl-webserver
```
In the example above, we are creating a directory under /tmp to hold the videos and then specifying a host mount to the container that corresponds to that new directory.  You may update this to any path on your host or use a different existing path if you would prefer. The host mount also improves performance as the downloaded files are written to the native host filesystem bypassing the CoW filesystem of the container.

### Environment

By default, all link will expire 7 days after download and datas will remove. You can fix it with environment variable.
```
EXPIRATION=7
```

Value is integer (number of days)
## Development
To start contributing you only have to run one command.
``` bash
npm run dev
```
This will start webpack and a dev server on `localhost:8080`

## License
MIT
