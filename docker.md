## How to build an run your docker image for react

This is a basic setup to build and run your docker image.
The provide TLS certification can be changed, checkout the README file in the cert folder.

> **Info:** Docker need to be installed on your workstation 

### Create your docker image

go to the vsnd-frontend folder in your terminal and the run this command:
```
docker build . -t bigbang/react
```

### run your new docker image
```
docker run -p 80:80 -p 443:443 bigbang/react
```
