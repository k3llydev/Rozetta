<div align="center">
  <a href="https://invite.rozetta.gg/" target="blank">
    <img
      alt="Luma"
      src="https://cdn.discordapp.com/icons/820396713297838122/aed8377dba68366eb4ce197c230450fb.webp?size=96"
    />
  </a>
  <h3>Rozetta</h3>
  <p align="center">An Open Source Discord bot.</p>
</div>

<div align="center">
  <img
    src="https://img.shields.io/github/package-json/v/k3llydev/Rozetta/development?label=Version&color=6EADBF"
    alt="Version"
  />
  <img
    src="https://coveralls.io/repos/github/k3llydev/Rozetta/badge.svg?branch=development&label=Coverage&color=6EADBF"
    alt="Coverage"
  />
  <img
    src="https://img.shields.io/github/license/k3llydev/Rozetta?label=License&color=6EADBF"
    alt="License"
  />
  <img
    src="https://img.shields.io/discord/820396713297838122?label=Discord"
    alt="Discord"
  />
</div>

## Setup

1. Duplicate `.env.example` and rename to `.env`. Provide all the values.

    | Key                            | Description                                                               |
    | ---------------------          | ------------------------------------------------------------------------- |
    | DISCORD_API_TOKEN              | Obtained from https://developer.discord.com                               |
    | DISCORD_MAIN_GUILD_ID          | Based on Discord's API docs, provide a `GUILD_ID` to be the "main server" |
    | SHARDING_TOTAL_SHARDS          | Number of shards for the application to be split on                       |
    | SHARDING_INITIAL_PORT          | Starting port for the exposed HTTP API, usually `5000`                    |
    | SHARDING_PORT_INCREMENT        | Number to add to the HTTP API port count. Recommended value is `1`        |

2. Run `npm run setup`.

## Building Dockerfile

This project is ready to be run with Docker, the command is the following:

```bash
npm run docker:build
```

This will create the required containers for the application on an empty state, database needs to be prepared next.

## Database migration

To initialize the database on a new instance, the following command must be executed before running the application:

```bash
npm run database:init
```

## Running

Once all previous steps are done, you can start the application with the following command:

```bash
npm start
```

<!-- ## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
``` -->

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Contributing

Read `CONTRIBUTING.md`.

## License

Rozetta is [MIT licensed](LICENSE).
