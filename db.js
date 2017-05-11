
module.exports = {
  getUser,
  getUsers,
  addUser,
  getHomeVacancies,
  getHomeVolunteers
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

function getHomeVacancies (connection) {
  return connection('vacancies')
    .select('vacancies.job_location', 'vacancies.category as vacancies_category')
}

function getHomeVolunteers (connection) {
  return connection('volunteers')
    .select('volunteers.location', 'volunteers.category')
}
