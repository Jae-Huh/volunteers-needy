
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vacancies').del()
    .then(function () {
      // Inserts seed entries
      return knex('vacancies').insert([
        {id:1, user_id: 99901, job_location: 'Auckland', category: 'Education', description: 'Looking for someone to teach me to play the violin. I used to play it as a kid, and now I\'d like to pick it up again. Can offer a meal in exchange!', title:'', title:'Violin tutor wanted'},
        {id:2, user_id: 99902, job_location: 'Wellington', category: 'Autumotive', description: 'My car needs an oil change but I\'m broke to get it serviced and I don\'t know anything about cars. Can anybody help me?', title:'Oil change'},
        {id:3, user_id: 99903, job_location: 'Hamilton', category: 'Health & Beatury', description: 'My hair is getting too long and I could use a haircut or style change. If you\'re learning to be a hairdresser, I would like to give you an opportunity to practise.', title:'Hairdresser'},
        {id:4, user_id: 99904, job_location: 'Auckland', category: 'IT', description: 'My computer seems broken. Any computer wizards out there??', title:'Computer wizard wanted'},
        {id:5, user_id: 99905, job_location: 'Hamilton', category: 'Sports', description: 'I want to learn to play tennis. If you don\'t mind a noob as your partner, I am available :)', title:'Tennis teacher'},
        {id:6, user_id: 99906, job_location: 'Tauranga', category: 'Education', description: 'My son is struggling with maths at school. He is currently learning fractions and I would like to kindly ask if he can get help from someone who can give him a lesson on it.', title:'Maths tutor'},
        {id:7, user_id: 99907, job_location: 'Christchurch', category: 'Automotive', description: 'I am modifying my motorbike, and would like someone\'s advice. Prefer to work on it in the weekend.', title:'Help with motorbike'},
        {id:8, user_id: 99908, job_location: 'Auckland', category: 'Home & Living', description: 'Need someone to mow my lawn. Take a bag of cookies in return!', title:'Lawn'},
        {id:9, user_id: 99909, job_location: 'Christchurch', category: 'Transport', description: 'I need someone to pick up my kid from his school and take him home for two weeks starting on the 22nd of May', title:'Driver/Nanny wanted'},
        {id:10, user_id: 99910, job_location: 'Queenstown', category: 'Education', description: 'I moved to NZ from overseas and my English is very bad. Looking for someone to help me learn the language over a cup of coffee.', title:'English speaking buddy'},
        {id:11, user_id: 99911, job_location: 'Auckland', category: 'Transport', description: 'Anyone going down to Rotorua at the end of May? I will contribute for petrol and snacks for the ride!', title:'Carpooling to Rotorua'},
        {id:12, user_id: 99912, job_location: 'Christchurch', category: 'IT', description: 'I just started learning about HTML and trying to make my own homepage. I would like someone who can help me start it off.', title:'Code teacher(HTML)'},
        {id:13, user_id: 99913, job_location: 'Tauranga', category: 'Home & Living', description: 'Anyone who can help me paint one of the rooms in my house? It\'s a small room so it shouln\'t take too long.', title:'Help painting room'},
        {id:14, user_id: 99914, job_location: 'Whangarei', category: 'Health & Beauty', description: 'Makeup gurus, hear me out! I would like to learn how to put on makeup and get some advice on which product to buy.', title:'Makeup'},
        {id:15, user_id: 99915, job_location: 'Auckland', category: 'Sports', description: 'Our footsal team is looking for a player. We\'re just a bunch of people at a various skill level playing for fun. Playing every Thursday from 6:30pm.', title:'Social footsal player wanted'},
        {id:16, user_id: 99916, job_location: 'Tauranga', category: 'Edcuation', description: 'Want to learn German. Any German speakers in Tauranga who can teach me the basics?', title:'Seeking German speaker'},
        {id:17, user_id: 99917, job_location: 'Auckland', category: 'IT', description: 'My computer is really slow, and I have no clue what is causing it. Can someone please have a look?', title:'Computer problem'},
        {id:18, user_id: 99918, job_location: 'Whangarei', category: 'Health & Beauty', description: 'Looking for someone who would like a free hair styling. I need a model for my graduation project', title:'Free hair styling'},
        {id:19, user_id: 99919, job_location: 'Wellington', category: 'Transport', description: 'Looking for someone to take a luggage up to Auckland.', title:'Luggage delivery'},
        {id:20, user_id: 99920, job_location: 'Auckland', category: 'Home & Living', description: 'Anyone who\'d like to pick up some feijoas from our garden? We have too much to handle!!', title:'Take feijoas!'},
        {id:21, user_id: 99921, job_location: 'Christchurch', category: 'Retail', description: 'Our opshop needs a retail person for this weekend(14th May) to help us out. We will be donating the profit to a charity.', title:'Retail person for a good cause'},
        {id:22, user_id: 99922, job_location: 'Auckland', category: 'Retail', description: 'Our opshop needs a retail person for this weekend(14th May) to help us out. We will be donating the profit to a charity.', title:'Retail person for a good cause'},
        {id:23, user_id: 99923, job_location: 'Queenstown', category: 'Retail', description: 'Our opshop needs a retail person for this weekend(14th May) to help us out. We will be donating the profit to a charity.', title:'Retail person for a good cause'},
        {id:24, user_id: 99924, job_location: 'Wellington', category: 'IT', description: 'Broken computer, need someone to look at it, thanks.', title:'Broken computer'},
        {id:25, user_id: 99925, job_location: 'Auckland', category: 'Education', description: 'Looking for a Japanese tutor. Can teach you English.', title:'Teach me Japanese'},
        {id:26, user_id: 99926, job_location: 'Hamilton', category: 'Sports', description: 'Gym buddies wanted for motivation.', title:'Gym buddies'}
      ])
    })
}
