import express from 'express';
import mysql from 'mysql';
import config from './config/config.js'; 

const app = express();
const pool = mysql.createPool(config.mysql);

//my-routes

userRoutes(app);
categoryRoutes(app);


const PORT = 8081; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
