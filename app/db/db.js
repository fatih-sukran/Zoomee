const Pool = require('pg').Pool

const pool = new Pool({
    user: "yidophvvaynugl",
    host: "ec2-34-230-153-41.compute-1.amazonaws.com",
    database: "d1n1640mmgsd7d",
    password: "2c85ddbd7f23b8f1f1581d3fe0a9f03e62993153210379b33e9e45b9173c2fed",
    port: 5432
})

module.exports = pool