# Weather App

A basic weather app that interfaces with the AccuWeather API to proxy requests to a Vue.js frontend

## Note:

Both the server and client use `pnpm` instead of `npm`.

To install it, simply run `npm i -g pnpm`. This is not an absolute requirement but is reccomended.

## Prequisites:

- Node v12 or greater
- NPM

## Running the services

### Backend

1. Create a `.env` file that follows the format of the `.env.example`, and make sure to insert your AccuWeather api key
2. Run `pnpm i`
3. Run `pnpm build`
4. Run `pnpm start`
5. The server should now be running on http://localhost:4000

### Frontend

1. Run `pnpm i`
2. Run `pnpm build`
3. Run `pnpm serve`, this will serve the project from the built files as if it was production
4. Visit http://localhost:5000/ by default

## Technologies used:

- Express.js
- Vue.js (v3)
- WindiCSS
- Vite
- Typescript
