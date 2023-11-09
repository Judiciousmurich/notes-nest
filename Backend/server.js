import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/config.js'; 

// Import your custom routes here
import userRoutes from './routes/userRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool(config.mysql);

app.use(cors());
app.use(bodyParser.json());

// Add your custom routes
userRoutes(app);
categoryRoutes(app);

app.get("/", (req, res) => {
    res.send("Hello😁 Welcome ecommerce API!");
});

// Start the server
const PORT = 8081; // Change it to your desired port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
