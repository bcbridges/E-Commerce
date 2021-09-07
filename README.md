# E-Commerce

## Description

This project was created to demonstrate utilizing API routes to manipulate data within a SQL database. This application's routes were created using the [Sequalize module](https://sequelize.org/master/). There is no deployed website for this project, but the route features can be accessed using an API testing software, such as [Insomnia](https://insomnia.rest/).

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [How To Contribute](#how-to-contribute)

- [Tests](#tests)

- [Questions](#questions)

## Installation

To install this application, clone the repository locally to your desktop. Within the repository, you will find the ['.env.EXAMPLE'](.env.EXAMPLE) file. Rename the file so that the .EXAMPLE part is removed and the file is just labeled '.env'. This file will hold your SQL credentials. In .env, fill in the DB_USER and DB_PW with the credentials of your local SQL user. To create the database for this application, create a new query within your SQL application, and execute the code located in the [db](./db/schema.sql) folder. This will create a new database named 'ecommerce_db'. To create the tables within the database and seed those tables with data, go to the cloned repositoy location within your terminal. Run the following commands 'npm run start' to create the tables and 'npm run seed' to seed the tabes. The application is now ready to receive API calls.

## Usage

Within your API testing software, you can make calls to the following: add table of call examples to the db.

Please view this video tutorial regarding the program here: https://drive.google.com/drive/folders/1ji_0KcyZmFmQtzWl23u0kIn-fTsNfRc6?usp=sharing

## Credits

There are no additional contributers to this repository.

## License

This project is licensed under the GNU General Public License v3.0.

## How to Contribute

Please contact me at the email provided in the Questions section if you wish to contribute to this repository.

## Tests

There were no js tests performed on the code for this application.

## Questions

Email all questions to the following: bbridgesdev@gmail.com

You can connect with me on [GitHub here](https://github.com/bcbridges)!
