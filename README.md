# HR-Management-Services

HR-Management-Services are the REST Services for the HR Management Project.

[![CircleCI](https://circleci.com/gh/AlexisNava/HR-Management-Services/tree/master.svg?style=svg)](https://circleci.com/gh/AlexisNava/HR-Management-Services/tree/master)

## Requirements

- [Node LTS](https://nodejs.org/en/download/) >= *v*10.16.3
- [yarn](https://yarnpkg.com/lang/en/) >= *v*1.17.3
- [nvm](https://github.com/nvm-sh/nvm) >= *v*0.34.0
- Create a `.env` file.

## .env Example File

**Important**:

- `DB_USERNAME` must have the same value that `POSTGRES_USER` in the `docker-compose` file. By defaul is equal to **hr-services**.

- `DB_DEVELOPMENT_PASSWORD` must have the same value that `POSTGRES_PASSWORD` in the `docker-compose` file. By defaul is equal to **development_hr_services_2019**.

```.env

DB_USERNAME = 'hr-services'
DB_DEVELOPMENT_PASSWORD = 'development_hr_services_2019'
DB_TEST_PASSWORD = ''
DB_PRODUCTION_PASSWORD = ''
DB_DEVELOPMENT_NAME = ''
DB_TEST_NAME = ''
DB_PRODUCTION_NAME = ''

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

```sh

npm test

```

### Run Linter

```sh

npm run lint

```

## License

**HR-Management-Services** is licensed under [Apache License, Version 2.0](https://github.com/AlexisNava/HR-Management-Services/blob/master/LICENSE).
