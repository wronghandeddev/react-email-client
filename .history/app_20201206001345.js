const app = require("/app.js");
const concurrently = require('concurrently');
const routes = require('/routes');
const start = require('node run start');
const mysql = require('connectMysql');


app.use('../src');
app.use('../client');

concurrently.useCommand(start(`'npm start /src && npm start client'`),
	client.connectMsql('./data/index.js'),
	src.connectMsql('./data/index.js');
console
.log
