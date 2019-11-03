import dotenv from 'dotenv';

dotenv.config();

export const envVar = {
  database: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
  }
};
