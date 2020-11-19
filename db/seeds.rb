# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Coach.create({name:'Artemie', age:'24', location:'Park Slope', sessions_id:1, bio:'hi', image:'yo'})
Coach.create({name:'Marissa', age:'24', location:'Park Slope', sessions_id:1, bio:'hi', image:'yo'})
Coach.create({name:'Sam', age:'24', location:'Park Slope', sessions_id:1, bio:'hi', image:'yo'})
Coach.create({name:'Andrew', age:'22', location:'Fort Greene', sessions_id:2, bio:'hi', image:'yo'})
Coach.create({name:'Gabby', age:'22', location:'Fort Greene', sessions_id:2, bio:'hi', image:'yo'})
Coach.create({name:'John', age:'34', location:'East Village', sessions_id:3, bio:'hi', image:'yo'})
Coach.create({name:'Justin', age:'34', location:'Astoria', sessions_id:3, bio:'hi', image:'yo'})
Location.create ([title:'Park Slope', time: '3:30pm', age_group: '3 - 9', image: 'hi', coach: 'Artemie', session_id:1])
Location.create ([title:'Fort Greene', time: '3:30pm', age_group: '3 - 9', image: 'hi', coach: 'Andrew', session_id:2])
Location.create ([title:'Astoria', time: '3:30pm', age_group: '3 - 9', image: 'hi', coach: 'Justin', session_id:3])
Location.create ([title:'Lower East Side', time: '3:30pm', age_group: '3 - 9', image: 'hi', coach: 'John', session_id:4])
Location.create ([title:'Upper East Side', time: '3:30pm', age_group: '3 - 9', image: 'hi', coach: 'Artemie', session_id:5])
Child.create([name:'Kid', age:'7',image:'blank', users_id:1, sessions_id:1])
Session.create([location_id:10, time: '3:30pm - 5pm', children_id:1, age: '3-6'])
Session.create([location_id:11, time: '3:30pm - 5pm', children_id:1, age: '7-9'])
Session.create([location_id:12 , time: '3:30pm - 5pm', children_id:1, age: '3-9'])
User.create ([first_name:'Artemie', last_name:'Amari', child_name: 'Hi', email: 'amari@gmail.com', classes:'null', admin:true, password_digest: '123456'])

puts "#{Session.count} sessions were created"