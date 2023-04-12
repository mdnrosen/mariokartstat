const mysql = require('mysql')
const util = require('util')
require('dotenv').config()
const port = process.env.PORT || 4999



const pool = mysql.createPool({
    // connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306
})

// const pool = mysql.createPool(process.env.DBURL)



// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was closed.");
          }
          if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("Database has too many connections.");
          }
          if (err.code === "ECONNREFUSED") {
            console.error("Database connection was refused.");
          } else {
            console.log('ERROR -->',err.code, err)
          }
    }
    if (connection) connection.release()
    return
})


const app = require('./app')
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

// pool.query = util.promisify(pool.query)




module.exports = pool 
