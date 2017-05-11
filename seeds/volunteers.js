
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id:1, user_id: 99901, location: 'Auckland', category: 'IT'},
        {id:2, user_id: 99902, location: 'Wellington', category: 'Education'},
        {id:3, user_id: 99903, location: 'Hamilton', category: 'Sports'},
        {id:4, user_id: 99904, location: 'Auckland', category: 'Health & Beauty'},
        {id:5, user_id: 99905, location: 'Hamilton', category: 'Home & Living'},
        {id:6, user_id: 99906, location: 'Tauranga', category: 'Automotive'},
        {id:7, user_id: 99907, location: 'Christchurch', category: 'Transport'},
        {id:8, user_id: 99908, location: 'Auckland', category: 'Transport'},
        {id:9, user_id: 99909, location: 'Christchurch', category: 'Health & Beauty'},
        {id:10, user_id: 99910, location: 'Queenstown', category: 'Automotive'},
        {id:11, user_id: 99911, location: 'Auckland', category: 'IT'},
        {id:12, user_id: 99912, location: 'Christchurch', category: 'Home & Living'},
        {id:13, user_id: 99913, location: 'Tauranga', category: 'Sports'},
        {id:14, user_id: 99914, location: 'Whangarei', category: 'Transport'},
        {id:15, user_id: 99915, location: 'Auckland', category: 'Home & Living'},
        {id:16, user_id: 99916, location: 'Tauranga', category: 'Health & Beauty'},
        {id:17, user_id: 99917, location: 'Auckland', category: 'Automotive'},
        {id:18, user_id: 99918, location: 'Whangarei', category: 'Home & Living'},
        {id:19, user_id: 99919, location: 'Wellington', category: 'IT'},
        {id:20, user_id: 99920, location: 'Auckland', category: 'Automotive'},
        {id:21, user_id: 99921, location: 'Christchurch', category: 'Home & Living'},
        {id:22, user_id: 99922, location: 'Auckland', category: 'Health & Beauty'},
        {id:23, user_id: 99923, location: 'Queenstown', category: 'Sports'},
        {id:24, user_id: 99924, location: 'Wellington', category: 'Automotive'},
        {id:25, user_id: 99925, location: 'Auckland', category: 'Transport'},
        {id:26, user_id: 99926, location: 'Hamilton', category: 'Education'}
      ])
    })
}
