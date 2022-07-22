const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "172.19.0.2",
    database: "api-rest-node",
    password: "postgres",
    port: "5432",
});

module.exports = pool;