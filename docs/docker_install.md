## Local development with Docker

### Using docker compose

> :warning: If you get the ```exec /ontrack/entrypoint.sh: no such file or directory``` error, change the entrypoint.sh file endings from CRLF to LF.

```bash
# Starts the containers in the background
docker compose up -d
# Rebuilding the containers
docker compose up --build -d
```

To get your container's ip address you can enter:
```bash
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' overtrackDB
```
You will then be able to connect to the postgres database from your host machine using that IP.


### Running

```bash
docker run --rm -d \
  -e "POSTGRESQL_DATABASE=overtrack" \
  -e "POSTGRESQL_USERNAME=overtrack" \
  -e "POSTGRESQL_PASSWORD=secret" \
  --name "overtrack-db" \
  postgres

docker run --rm -d \
  -e "DATABASE_URL=postgres://overtrack:secret@overtrack-postgres/overtrack" \
  -e "RAILS_ENV=development" \
  -p 3000:3000 \
  inoda/ontrack
```