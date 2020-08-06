const mysql = require('mysql');
const config = require('./config')

const query = sql => new Promise((resolve, reject) => {
  let con
  try {
    con = mysql.createPool(config)

    con.getConnection(function (err, connection) {
      if (err) {
        reject(err)
        return
      }

      con.query(sql, function (err, rows) {
        if (!err) {
          resolve(rows)
        }
      })
    })
  } catch (error) {
    reject(error)
  }
})

module.exports = query
