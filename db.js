
module.exports = {
  getUser,
  getUsers,
  addUser,
  getListings
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function addUser (newUser, connection) {
  return connection('users')
    .insert(newUser)
}

function getHomeListings (connection) {
  return connection('vacancies')
    .join('volunteers', 'vacancies.category', 'volunteers.category as volunteer_category')
    .select('vacancies.job_location', 'vacancies.category', 'volunteer_category', 'volunteers.location')
}
