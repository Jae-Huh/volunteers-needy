const db = require('./db')

function lastFiveVac (conn) {
  return db.getHomeVacancies(conn)
    .then(results => {
      return results.slice(Math.max(results.length - 2, 1))
    })
}

function lastFiveVol (conn) {
  return db.getHomeVolunteers(conn)
    .then(results => {
      return results.slice(Math.max(results.length - 2, 1))
    })
}

module.exports = {
  lastFiveVac,
  lastFiveVol
}
