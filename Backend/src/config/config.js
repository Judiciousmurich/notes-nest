import dotenv from 'dotenv';

dotenv.config();

const { PORT, HOST, HOST_URL, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, MYSQL_HOST } = process.env;

const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    mysql: {
        host: MYSQL_HOST,
        database: MYSQL_DB,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD
    }
};

export default config;
