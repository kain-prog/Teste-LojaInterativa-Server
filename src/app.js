const express = require('express');
const cors = require('cors');
const db = require('./db/config');

const app = express();

// const insertQuery = `CREATE TABLE IF NOT EXISTS public.products (
//     id, name, maker, category, quantity, price
// )`

// result = db.query(insertQuery)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    app.use(cors());
    next();
});

app.use(express.json());

module.exports = { app };