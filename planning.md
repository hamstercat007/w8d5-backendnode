###

npm init - create a package.json and install dependencies
Set up application framework and express server - routes, views and static files using Express generator and middleware - crafting our responses to user requests on the way through
Set up database - using Heroku - to use Node and JS to start sending SQL queries
Set up tables in db, and get data in them - populate
Hook up server's logic to talk to the DB instead of a file

Express Application generator
npx express generator - es modules
Check localhost 3000 to see if it's working
Make changes to the root path app.get("/", (req, res) => {res.send("Hello world"}, 
restart the server
Add nodemon to npm start script and install nodemon.

All code in app.js, as before, plus a lot of middleware such as a logger.This sets up the
listener in bin folder - www.js - either using the provided port from env.variable if there is one, or 3000 by default.

###

npm install pg - to interface with Postgres Sql
Change common js import syntax to to ESM.
Create pool connection, query connection, env variables,
.gitignore - store .env and node_modules
