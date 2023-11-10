import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/config.js'; 


import userRoutes from './routes/userRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool(config.mysql);

app.use(cors());
app.use(bodyParser.json());

//my-routes
userRoutes(app);
categoryRoutes(app);
notesRoutes(app);

app.get("/", (req, res) => {
    res.send("Hello😁 Welcome notes API!");
});


const PORT = 8081; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
