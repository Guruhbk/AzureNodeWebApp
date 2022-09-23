import { Sequelize } from 'sequelize';
import {config} from "./config.js"

export const sequelize = {}
const configEnv = () => {
  let data = {};
    data = {
      user: config.databaseConfig.username,
      password: "Welcome1",
      database: config.databaseConfig.database,
      host: config.databaseConfig.host,
      port: config.databaseConfig.port
    };

  
  return data;
};

const dbconnect = configEnv();
console.log('config ',config)
sequelize.sequelize = new Sequelize(
  dbconnect.database,
  dbconnect.user,
  dbconnect.password,
  {
    host: dbconnect.host,
    port: dbconnect.port,
    dialect: 'postgres',
    logging: false,
    // logging: console.log,

    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
    // query: {
    //     raw: true
    // }
  }
);
