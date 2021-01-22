const app = require("/app.js");
const concurrently = require('concurrently');
const routes = require('/routes');
const start = require('node run start');



app.use('../src');
app.use('../client');

concurrently.command{start:(`'npm start /src && npm start client'`);
