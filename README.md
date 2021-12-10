# express-react-boilerplate

[![Standard - JavaScript Style Guide][standard-badge]][standard-url]

- [express-react-boilerplate](#express-react-boilerplate)
  - [Usage](#usage)
  - [Commands](#commands)
    - [start](#start)
    - [development](#development)
    - [build](#build)
  - [Environment variables](#environment-variables)

## Usage

To get started clone this repository and install npm dependencies:

```
$ git clone git@github.com:1978milanbabic/express-react-boilerplate.git
$ cd express-react-boilerplate && npm install
$ npm run dev
```

## Commands

### start

`node main.js`

Start production server.

### development

`nodemon main.js & parcel index.html`

Start node & react development servers.

### build

`parcel build index.html`

Build react.

## Environment variables

| Name        | Default value | Description                   |
|-------------|---------------|-------------------------------|
| HTTP_PORT   | 1337          | App server port               |

[standard-badge]: https://cdn.rawgit.com/feross/standard/master/badge.svg "Standard - JavaScript Style Guide"
[standard-url]: https://github.com/feross/standard
