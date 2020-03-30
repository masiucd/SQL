// @ts-nocheck
const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'masiu',
});

// connect to database
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
global.db = db;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
