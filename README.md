# expressjs

## Startig Docker Containers

#### Build Docker image
``` docker build -t expressjs/custom . ```

#### Create Network
```docker network create expressjs```

#### Start Express JS Webserver
```docker run -it --rm -p 3000:3000 --network expressjs --name webserver  expressjs/custom```

#### Start Alpine Container
```docker run -it --rm --network expressjs  alpine/curl sh```

#### Start DB
```docker run --rm -it --name mydb -e MYSQL_ROOT_PASSWORD=lorin --network expressjs mysql:latest```

