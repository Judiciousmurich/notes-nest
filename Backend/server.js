import express from 'express';
import mysql from 'mysql';
import config from './config/config.js'; // Your database configuration

const app = express();
const pool = mysql.createPool(config.mysql);

// Your routes and controllers can be imported and used here

const PORT = 8081; // Use the desired port, such as 8081

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
