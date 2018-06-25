## Create TSL with openssl

> **Info:** run this in your bash terminal

```
openssl req -x509 -nodes -days 1 -newkey rsa:4096 -subj "/C=CH/ST=WINTERTHUR/L=BAHNHOF/O=DEMO AG/OU=IT/CN=localhost" -keyout cert/nginx.key -out cert/nginx.crt
```
