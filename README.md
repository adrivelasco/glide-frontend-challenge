# Glide Frontend Challenge

Build an application with React that consist in show the structure of some business company.

## Table of Contents

- [Getting Started](#getting-started)
  - [Quick Setup](#quick-setup)
- [Running both servers simultaneously](#running-both-servers-simultaneously)
- [Client Application](#client)
- [Server Application](#server)

## Getting Started

### Quick Setup

First of all, clone the repo into and then you will need to ensure that [yarn] has been
installed since this project uses yarn for dependency management and the
workspaces feature. Once `yarn` has been installed, you can get up and running
with:

```sh
$ git clone https://github.com/adrivelasco/glide-frontend-challenge.git
$ cd glide-frontend-challenge
$ yarn
$ yarn start
```

The above commands will install all the dependencies in both the `client` and
`server` folders as well as start up both the client server and the API server
for you.

The `client` app will be using [create-react-app], so anything that is supported
by create-react-app can be used.

## Running both servers simultaneously

If you'd like to run the `client` and `server` apps in one command, you can
change into the root directory and just run:

```sh
$ yarn
$ yarn start
```

This will install dependencies in both folders as well as spin up both servers
using `npm-run-all`

## client

```sh
$ cd client
$ yarn
$ yarn start
```

The app will be started and available at http://localhost:3000

## server

```sh
$ cd server
$ yarn
$ yarn start
```

The API server will be started and available at http://localhost:3001

[yarn]: https://yarnpkg.com
[create-react-app]: https://github.com/facebook/create-react-app
[yarn workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/