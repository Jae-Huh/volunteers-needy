
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vacancies').del()
    .then(function () {
      // Inserts seed entries
      return knex('vacancies').insert([
        {id:1, user_id: 99901, job_location: 'Auckland', category: 'Education', description: ''},
        {id:2, user_id: 99902, job_location: 'Wellington', category: 'Autumotive', description: ''},
        {id:3, user_id: 99903, job_location: 'Hamilton', category: 'Health & Beatury', description: ''},
        {id:4, user_id: 99904, job_location: 'Auckland', category: 'IT', description: ''},
        {id:5, user_id: 99905, job_location: 'Hamilton', category: 'Sports', description: ''},
        {id:6, user_id: 99906, job_location: 'Tauranga', category: 'Education'},
        {id:7, user_id: 99907, job_location: 'Christchurch', category: 'Automotive', description: ''},
        {id:8, user_id: 99908, job_location: 'Auckland', category: 'Home & Living', description: ''},
        {id:9, user_id: 99909, job_location: 'Christchurch', category: 'Transport', description: ''},
        {id:10, user_id: 99910, job_location: 'Queenstown', category: 'Education', description: ''},
        {id:11, user_id: 99911, job_location: 'Auckland', category: 'Transport', description: ''},
        {id:12, user_id: 99912, job_location: 'Christchurch', category: 'IT', description: ''},
        {id:13, user_id: 99913, job_location: 'Tauranga', category: 'Home & Living', description: ''},
        {id:14, user_id: 99914, job_location: 'Whangarei', category: 'Health & Beauty', description: ''},
        {id:15, user_id: 99915, job_location: 'Auckland', category: 'Sports', description: ''},
        {id:16, user_id: 99916, job_location: 'Tauranga', category: 'Edcuation', description: ''},
        {id:17, user_id: 99917, job_location: 'Auckland', category: 'IT', description: ''},
        {id:18, user_id: 99918, job_location: 'Whangarei', category: 'Health & Beauty', description: ''},
        {id:19, user_id: 99919, job_location: 'Wellington', category: 'Transport', description: ''},
        {id:20, user_id: 99920, job_location: 'Auckland', category: 'Health & Beauty', description: ''},
        {id:21, user_id: 99921, job_location: 'Christchurch', category: 'Sales', description: ''},
        {id:22, user_id: 99922, job_location: 'Auckland', category: 'Sales', description: ''},
        {id:23, user_id: 99923, job_location: 'Queenstown', category: 'Sales', description: ''},
        {id:24, user_id: 99924, job_location: 'Wellington', category: 'IT', description: ''},
        {id:25, user_id: 99925, job_location: 'Auckland', category: 'Education', description: ''},
        {id:26, user_id: 99926, job_location: 'Hamilton', category: 'Sports', description: ''}
      ])
    })
}
