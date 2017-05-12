
module.exports = {
  getUser,
  getUsers,
  addUser,
  getHomeVacancies,
  getHomeVolunteers,
  addVacancies,
  addVolunteer,
  getUserProfile,
  retrieveID,
  findMatches,
  matchVolunteerToVacancies,
  matchVacanciesToVolunteers,
  getUserVacancies
}

function matchVolunteerToVacancies (connection, id) {
  return getUserVacancies(connection, id)
    .then(result => {
      if (result.length === 0) {
        return result
      }

      const vacancies = result[0]
      return connection('volunteers')
        .where('category', vacancies.category)
    })

}

function getUserVacancies (connection, id) {
  return connection('vacancies')
    .where('user_id', id)
}

function matchVacanciesToVolunteers (connection, id){
  return getUserVolunteers(connection, id)
  .then(result => {
    if (result.length === 0){
      return result
    }
    const volunteers = result[0]
    return connection('vacancies')
    .where('category', volunteers.category)
  })
}

function getUserVolunteers(connection, id){
  return connection('volunteers')
  .where('user_id', id)
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
    .select('vacancies.job_location', 'vacancies.category as vacancies_category', 'vacancies.title')
}

function getHomeVolunteers (connection) {
  return connection('volunteers')
    .select('volunteers.location', 'volunteers.category')
}

function addVacancies (connection, entry) {
  return connection('vacancies')
    .insert(entry)
}

function addVolunteer (connection, entry) {
  return connection('volunteers')
    .insert(entry)
}

function getUserProfile (conn, id) {
  return conn('users')
  .leftJoin('volunteers', 'users.id', 'volunteers.user_id')
  .leftJoin('vacancies', 'users.id', 'vacancies.user_id')
  .select('users.name', 'vacancies.category as vacancies_category', 'vacancies.job_location', 'vacancies.description as vacancies_desc', 'vacancies.title', 'volunteers.location', 'volunteers.category')
  .where('users.id', id)
}

function retrieveID (user, conn){
  return conn('users')
  .select('users.id')
  .where('users.email', user)
}

function findMatches (conn, id){
  return conn('users')
  .leftJoin('volunteers', 'users.id', 'volunteers.user_id')
  .leftJoin('vacancies', 'users.id', 'vacancies.user_id')
  .select('users.name', 'users.email', 'vacancies.category as vacancies_category', 'vacancies.job_location', 'vacancies.description as vacancies_desc', 'vacancies.title', 'volunteers.location', 'volunteers.category')
  .whereNot('users.id', id)
}
