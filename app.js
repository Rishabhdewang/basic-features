const express = require('express');
const app = express();

const path=require('path')
const { Model } = require('objection');
const Knex = require('knex');
const bodyParser = require('body-parser');
const router = require("./routes/route"); 
const knexConfig = require("./knexfile")


const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(knex);

app.use(bodyParser.json());
app.use(express.static(__dirname,))

// import routes
app.use('/user', router);

app.listen(8001, () => {
    console.log('listening on port : 8001');
});



