[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
# USER'S TASK MANAGEMENT

> User's Task management app helps to manage user's task

> [users service](https://user--serv.herokuapp.com/).

> [tasks service](https://task--serv.herokuapp.com/).

## Table of Content
 * [Architectural Diagram](#architectural-diagram)

 * [Getting Started](#getting-started)

 * [Getting Started](#getting-started)
 
 * [Installation](#installation)
 
 * [Built With](#built-with)
 
 * [API Documentation](#documentation)
 
 * [Author](#author)

## Architectural Diagram

 ![alt Achitural Diagram](architectural--diagram.png?raw=true)

## Getting Started

### Installation

To install and run this project you would need to have listed stack installed:

- Node.js
- Docker

1. Clone this repository into your local machine:
```
e.g git clone https://github.com/tobslob/users-task-backend.git
```
2. Install dependencies 
```
cd tasks

e.g yarn install

cd users

e.g yarn install
```

3. Start any of the services by running the dev script.

```
e.g yarn start:dev
```

### Docker Development Setup

- Install Docker
- Change to application root directory
- Build a docker image with the following command `docker-compose build`
- Run `docker-compose up`

## Built With
* ExpressJS
* Typescript
* NodeJS
* Docker
* Heroku
* MongoDB
* POSTMAN
* RabbitMQ

## API Documentation

### Base URL
```
https://user--serv.herokuapp.com
```

```
https://task--serv.herokuapp.com
```

> [API Doc](https://documenter.getpostman.com/view/6225567/TVmQdbNW).

## Author
*  [Kazeem Oluwatobi Odutola](https://twitter.com/tobslob_)

## License
This project is licensed under the MIT license - see the LICENSE.md file for details.
