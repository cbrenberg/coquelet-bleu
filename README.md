# Coquelet Bleu Coffee

This app was created for use by Coquelet Bleu Coffee, a potential business that will specialize in roasting coffee beans at a very small scale, up to one pound at a time. The app gives customers the ability to choose from available inventory and customize their preferred quantity and roast level before submitting payment to the business owner through Stripe. The business owner (admin) is able to add and monitor inventory, track and process orders, and have easy access to customer contact information for further communication and shipping.

## Tech Overview
This version uses React, Redux, Express, Passport, Stripe API, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [Homebrew](https://brew.sh/)

To accept payment, you will also need a [Stripe](https://dashboard.stripe.com) account with API keys

## Create database and tables

Run the SQL queries found in `database.sql` to create your database and all necessary tables.

If you would like to name your database something else, you will need to change `blue_cock` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

* Clone and download this repository
* Run `npm install` to install the dependencies listed in `package.json`
* Create a `.env` file at the root of the project and create the following ENV variables:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

    ```
    STRIPE_PUBLISHABLE_KEY=publishable key from your Stripe account
    STRIPE_SECRET_KEY=secret key from your stripe account
    ```

    *NOTE - you will want to use the provided test keys during development to avoid accidental charges*

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

### Create an Admin account

To create an admin account for development, you will need to uncomment the `Register` button in the `LoginPage` component, then use the user interface at http://localhost:3000/login to register. 


## Production Build

Before deploying to production, run `npm run build` in terminal. This will create a build folder that contains an optimized, minified version of the project. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update when files change.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Node/Express server code

## Deployment to Heroku

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add environment variables for `SERVER_SESSION_SECRET`, `STRIPE_PUBLISHABLE_KEY`, and `STRIPE_SECRET_KEY`
1. In the deploy section, select manual deploy

#### *PLEASE NOTE - The Stripe API requires pages to be served over HTTPS in order for payment to work in production*

## Known Issues

* Product image doesn't update with new selection
* Admin isn't redirected after login
* Does not work well on mobile screen sizes
* There is currently no UI for admin to set prices

## Next Steps

* Add server-generated SMS or email notifications to admin when new orders are placed, inventory is running low
* Create an in-app means for sending email or SMS messages to customers with order updates 
* Auto-generate printable shipping labels from order detail view
* Give admin the ability to halt new orders if demand is too high
* Implement product image uploading for new inventory (instead of providing just a URL of an existing image host)
* Mobile-friendly styling for user views