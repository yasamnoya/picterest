<h1 align="center">
  <br>
  <a href="https://picterest.app.jnyiunn.com/"><img src="https://github.com/yasamnoya/picterest/blob/main/client/src/assets/picterest_logo.png?raw=true" alt="Book exchange" width="200"></a>
</h1>

<h4 align="center">🖼 Post your Pics, then get everyone's like</h4>

<p align="center">
  <a href="https://picterest.app.jnyiunn.com/"><img src="https://img.shields.io/badge/Deployed%20On-AWS-yellow"></a>
</p>


![screenshot](https://github.com/yasamnoya/picterest/blob/main/screenshot.jpg?raw=true)

# Tech Used

## Backend

- [Express](https://expressjs.com/) - web framework for Node.js
- [sequelize](https://sequelize.org/) - ODM for RDBMS
- [Passport](https://www.passportjs.org/) - authentication middleware for Node.js
- [GitHub OAuth](https://developer.github.com/v3/oauth/) - signing in with GitHub accounts

## Frontend

- [Vue](https://vuejs.org/) -  frontend framework
- [Vue router](https://router.vuejs.org/) - the official router for Vue.js
- [axios](https://www.axios.com/) - handling ajax requests

## Deployment

- [Amazon EC2](https://aws.amazon.com/ec2/) - hosting both frontend & backend of the application
- [ElephantSQL](https://www.elephantsql.com/) - hosting the database
- [NGINX](https://www.nginx.com/) - web server as a reverse proxy

# Setup

1. Clone this repository.
2. Create the environment files
  - Create `.env` under `server/`, sample as below:
  ```env
  PORT=3000
  FRONTEND_URL=http://localhost:8080
  GITHUB_CLIENT_ID=<your githu client id>
  GITHUB_CLIENT_SECRET=<your github client secret>
  SESSION_SECRET=some_secret

  DB_NAME=<your db name>
  DB_HOSTNAME=<host of your db>
  DB_USERNAME=<db username>
  DB_PASSWORD=<db password>
  ```
  - Create `.env.local`under `client/`, sample as below:
  ```env
  VUE_APP_BASE_URL=/
  VUE_APP_BACKEND_URL=http://localhost:3000/api/
  VUE_APP_GITHUB_CLIENT_ID=<your github client id>
  ```
3. Start the server for development purpose:
```sh
cd server && npm run dev
cd client && npm run serve
```
4. Start the server for production:
```sh
cd server && npm run start
cd client && npm run build
```
Then serve the files under `ciient/dist/` with a http server, i.e. NGINX.

# License

MIT

