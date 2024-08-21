<div align="center">
  <a href="http://therealmultiverse.com/" target="blank">
    <img
      alt="The Real Multiverse"
      src="https://cdn.discordapp.com/icons/820396713297838122/f33aff504d6463c795432a058335719d.webp"
    />
  </a>
  <h1>The Real Multiverse</h1>
  <p align="center">An Open Source Discord bot.</p>
</div>

<div align="center">
  <a
    href="https://github.therealmultiverse.com/"
    target="_blank"
  >
    <img
      src="https://img.shields.io/github/package-json/v/k3llydev/TheRealMultiverse/master?label=Version&color=purple"
      alt="Version"
    />
  </a>
  <a
    href="https://coveralls.io/github/k3llydev/TheRealMultiverse?branch=master"
    target="_blank"
  >
    <img
      src="https://coveralls.io/repos/github/k3llydev/TheRealMultiverse/badge.svg?branch=master&label=Coverage"
      alt="Coverage"
    />
  </a>
  <a
    href="https://github.com/k3llydev/TheRealMultiverse/LICENSE.md"
    target="_blank"
  >
    <img
      src="https://img.shields.io/github/license/k3llydev/TheRealMultiverse?label=License&color=purple
"
      alt="License"
    />
  </a>
  <a
    href="https://join.therealmultiverse.com"
    target="_blank"
  >
    <img
      src="https://img.shields.io/discord/820396713297838122?label=Discord"
      alt="Discord"
    />
  </a>

</div>

## Installation

There's a npm command ready for you to prepare the project:

```bash
npm run setup
```

## Running (development)

The easiest way to run is with Docker but first you need to setup the project.

```bash
npm run build
```

```bash
docker compose up
```

**Setup database**

```bash
npm run build:database
```



## Migrating database

To start a migration, run:

```bash
npm run database:build
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

## Support

TheRealMultiverse is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Contributing

Read `CONTRIBUTING.md`.

## License

TheRealMultiverse is [MIT licensed](LICENSE).
