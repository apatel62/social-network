# Social Network

![license-badge](https://img.shields.io/badge/MIT_License-01a6ff)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description

An API built from scratch for a social network web app where users can share their thoughts, create a friends list, and react to friends' thoughts. For routing, Express.js was used. MongoDB was used for the database and Mongoose for the ODM. There are four different API routes: "/api/users", "/api/users/:userId/friends/:friendId", and "/api/thoughts", and "/api/thoughts/:thoughtId/reactions." Each route has its own set of CRUD operations based on the acceptance criteria which performs the corresponding Mongoose methods.

## Installation

Node.js and MongoDB is required to run this code. Node.js can be installed by visting [Node.js](https://nodejs.org/en). MongoDB can be installed by visiting [MongoDB](https://www.mongodb.com/).

## Usage

This project was used to get a better understanding of document-oriented databases like MongoDB and its ODM Mongoose. 

## How to Contribute

Please contact me before contributing to this project. My contact info is located in the Questions section.

## Tests

In your git bash where this repo is located, run npm install which runs the package.json file to install the necessary modules. Then run npm run build to build the code. Next, run npm run seed to automatically seed some users into the database. Finally, run npm run start. Below, shows the sequence of what to run in your git bash and makes it easier for you to copy and paste each line.

```
npm install
npm run build
npm run seed
npm run start
```

The following video walkthroughs how to use the code: [walkthrough](https://drive.google.com/file/d/1HuYZTlJf6E2D2-eL1ahtmP-TKbyqVAnm/view?usp=sharing).

## License

This project is covered under the MIT license.

---

## Questions

GitHub username: [apatel62](https://github.com/apatel62) <br>
