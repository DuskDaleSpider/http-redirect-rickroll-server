const monk = require('monk');
const connection_url = process.env.MONGO_URL;
const db = monk(connection_url);

module.exports = db;