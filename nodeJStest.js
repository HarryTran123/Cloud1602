const express = require("express");
const app = express();
const hostname = 'localhost' ;
const port = 5000 ;
solan = 0;
//-------------
app.listen( process.env.port | port);
console .log( `Server running at
http://${hostname}:${process.env.port | port}/` );