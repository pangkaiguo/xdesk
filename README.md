# XDESK

XSKY Integrated Service Desk.

## xdesk-client

XDESK UI management platform, which contains Admin & Client management pages and depend on the nodejs framework NextJS + MUI5 + React-Hook-Form + Yup.

- NextJS: SSR
  - CSR: Client-Side Rendering
  - SSR: Server-Side Rendering
  - SSG: Static-Site Generation
- MUI5: UI Components
- React-Hook-Form: Forms
- Yup: schema validation

## xdesk-server

XDESK server api for UI, which depend on the nodejs framework NestJS + Prisma + Postgresql.

- NestJS: MVC
- Prisma: ORM
- Postgres: Relation DB

## docker-compose

- postgres(v14.2)
  - The environment configs in `.env` file.
    - db: postgres
    - user: postgres
    - password: postgres
    - port: 5432:5432

  ```postgres
    postgres:
      image: postgres:latest
      container_name: xdesk-postgres-service
      restart: unless-stopped
      ports:
        - 5432:5432
      logging:
        options:
          max-size: "100m"
          max-file: "10"
      env_file:
        - ./xdesk-server/.env
      volumes:
        - postgres:/var/lib/postgresql/data
      networks:
        - xdesk-bridge
  ```

- pgAdmin4(v6.7)

  ```pgAdmin4
    pgadmin:
      image: dpage/pgadmin4
      container_name: pgadmin_container
      restart: unless-stopped
      ports:
        - 5050:80
      environment:
        PGADMIN_DEFAULT_EMAIL: pgadmin4@xsky.com
        PGADMIN_DEFAULT_PASSWORD: pgadmin4
        PGADMIN_CONFIG_SERVER_MODE: 'False'
      volumes:
        - pgadmin:/var/lib/pgadmin
      networks:
        - xdesk-bridge
  ```

- NestJS: (v8.0)

  ```xdesk-server
    xdesk-server:
      image: xdesk-server:latest
      container_name: xdesk-server-service
      # restart: unless-stopped
      build:
        context: ./xdesk-server
        dockerfile: Dockerfile
      ports:
        - 3333:3333
      depends_on:
        - postgres
      links:
        - postgres:postgres
      env_file:
        - ./xdesk-server/.env
      volumes:
        # base volumes naming`xdesk-server`: depend on docker-compose version 3
        - xdesk-server:/home/node/xdesk-server
      networks:
        - xdesk-bridge
      command: sleep infinity
  ```

- NextJS: (v12.1.0)

  ```xdesk-client
    xdesk-client:
      image: xdesk-client:latest
      container_name: xdesk-client-service
      restart: unless-stopped
      build:
        context: ./xdesk-client
        dockerfile: Dockerfile
      ports:
        - 3003:3003
      volumes:
        # base volumes naming`xdesk-client`: depend on docker-compose version 3
        - xdesk-client:/home/node/xdesk-client
      networks:
        - xdesk-bridge
  ```

- volumes
  - volumes rename: depend on docker-compose version 3

  ```volumes
    volumes:
      postgres:
        name: xdesk-postgres-volume
      pgadmin:
        name: xdesk-pgadmin-volume
      xdesk-server:
        name: xdesk-server-volume
      xdesk-client:
        name: xdesk-client-volume
  ```

- networks

  ```networks
    networks:
      xdesk-bridge:
        driver: bridge
  ```
