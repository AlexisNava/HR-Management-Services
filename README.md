# HR-Management-Services

HR-Management-Services are the REST Services for the HR Management Project.

[![CircleCI](https://circleci.com/gh/AlexisNava/HR-Management-Services/tree/master.svg?style=svg)](https://circleci.com/gh/AlexisNava/HR-Management-Services/tree/master)

## Notes

- The Web that consumes the services is [HR-Management-App](https://github.com/AlexisNava/HR-Management-App).

## Requirements

- [Node LTS](https://nodejs.org/en/download/) >= *v*10.16.3
- [yarn](https://yarnpkg.com/lang/en/) >= *v*1.17.3
- [nvm](https://github.com/nvm-sh/nvm) >= *v*0.34.0
- [Docker](https://docs.docker.com/install/) >= *v*19.03.2
- [Docker Compose](https://docs.docker.com/compose/install/) >= *v*1.23.2
- Create a `.env` file.

## .env Example File

```.env

JWT_KEY=''
PORT=''
HOST=''

```

## Installation

1. Use the lastest [Node LTS](https://nodejs.org/en/download/) version.

```sh

# Install the latest Node LTS version.
nvm install --lts

# In the root directory of HR-Management-App project run the following command to use the latest node lts version:

nvm use

```

2. Install Dependencies

```sh

npm i

```

3. Run the Prisma Database.

```sh

docker-compose up -d

```

4. Make Prisma Deploy

```sh

npx prisma deploy

```

## Usage

### Run the project

```sh

npm start

```

### Run the project in production mode

```sh

npm run start:production

```

### Run Tests

**Important**: You must complete the installation steps and add `JWT KEY` for run the tests correctly.

```sh

npm test

```

### Run Linter

```sh

npm run lint

```

## License

**HR-Management-Services** is licensed under [Apache License, Version 2.0](https://github.com/AlexisNava/HR-Management-Services/blob/master/LICENSE).
