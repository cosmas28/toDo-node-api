let mongoose = require('mongoose');

const databaseServer = process.env.DB_SERVER;
const databaseName = process.env.DATABASE;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@${databaseServer}/${databaseName}`)
      .then(() => {
        console.log('Databse connect successful')
      })
      .catch(error => {
        console.error('Database connection error')
      })
  }
}

module.exports = new Database();
