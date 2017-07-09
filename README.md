> In progress Table Tennis stats tracker to learn more about authentication, react, redux, and docker.

### To run follow:
In top level folder
```
$ npm install
```
START
```
$ docker-compose up
```
REMOVE
```
$ docker-compose down
```

### Enter PostgreSql
To see container IDs:
```
$ docker ps
```
```
$ docker exec -it [POSTGRES_CONTAINER_ID] /bin/bash
root@[CONTAINER_ID] $ su - postgres
root@[CONTAINER_ID] $ psql db
```
