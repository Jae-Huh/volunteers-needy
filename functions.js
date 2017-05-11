const db = require('./db')

function lastFive (conn) {
  db.getHomeListings(conn)
    .then(index)
}

module.exports = {
  lastFive
}
