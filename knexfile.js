const path = require('path');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, './data/database.db')
  },
  migrations: {
    directory: path.resolve(__dirname, './data/migrations')
  },
  useNullAsDefault: true
};