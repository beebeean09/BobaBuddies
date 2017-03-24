# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# City.delete_all
# Event.delete_all
#
User.create( email: "bobabuddies@gmail.com", password: "bobaboba", first_name: "Buddy", host: false )
User.create( email: "paul@gmail.com", password: "iloveboba", first_name: "Paul", host: true )
User.create( email: "sarah2@gmail.com", password: "iloveboba2", first_name: "Sarah", host: true )
#
# City.create!(name: "San Francisco", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/SF_vysi0o.jpg')
# City.create!(name: "Chicago", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490067089/Chicago_i9fiwb.jpg')
# City.create!(name: "Los Angeles", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057534/los_angeles_cmfmup.jpg')
# City.create!(name: "Seattle", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057536/seattle_lcuoan.jpg')
# City.create!(name: "Washington D.C.", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/washington_dc_cvix4r.jpg')
# City.create!(name: "New York", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057535/NY_ezvbug.jpg')


Event.create!(city_id: 1, host_id: 2, title: "Milk Tea Boba Party", date: "2017-10-09 12:00:00PM", time: "2017-10-09 12:00:00PM", address: "135 4th St. San Francisco, CA", seats: 6)
Event.create!(city_id: 2, host_id: 2, title: "What is Boba?!", date: "2017-05-20 09:00:00PM", time: "2017-05-20 09:00:00PM", address: "333 S. State St. Chicago, IL", seats: 10)
Event.create!(city_id: 3, host_id: 2, title: "How Much Boba...Is Too Much Boba??", date: "2017-07-01 03:30:00PM", time: "2017-07-01 03:30:00PM", address: "700 Western St. Los Angeles, CA", seats: 7)
Event.create!(city_id: 4, host_id: 3, title: "Alcoholic Boba Drinks", date: "2017-06-28 06:30:00PM", time: "2017-06-28 06:30:00PM", address: "606 E. Pine St. Seattle, WA", seats: 4)
Event.create!(city_id: 5, host_id: 3, title: "Boba a day, Keeps the Doctor Away~", date: "2017-09-05 10:00:00PM", time: "2017-09-05 10:00:00PM", address: "400 8th St. NW, Washington, DC ", seats: 10)
Event.create!(city_id: 6, host_id: 3, title: "Matcha Boba Drinks!", date: "2017-08-15 02:30:00PM", time: "2017-08-15 02:30:00PM", address: "23 Clinton St. New York, NY", seats: 9)
Event.create!(city_id: 1, host_id: 1, title: "Milk Tea vs. Tea", date: "2017-10-09 12:00:00PM", time: "2017-10-09 12:00:00PM", address: "1139 Taraval St. San Francisco, CA", seats: 6)
Event.create!(city_id: 2, host_id: 1, title: "Find Your Pearl", date: "2017-07-20 09:00:00PM", time: "2017-07-20 09:00:00PM", address: "2126 S Archer Ave. Chicago, IL", seats: 10)
Event.create!(city_id: 3, host_id: 1, title: "How Many Bobas Are in Your Average Cup?", date: "2017-10-01 05:30:00PM", time: "2017-10-01 05:30:00PM", address: "713481 Euclid St. Garden Grove, CA", seats: 7)
Event.create!(city_id: 4, host_id: 1, title: "Fruit Smoothies and Boba?!", date: "2017-07-26 08:30:00PM", time: "2017-07-26 08:30:00PM", address: "619 S King St. Seattle, WA", seats: 8)
Event.create!(city_id: 5, host_id: 3, title: "What's the Most Boba You've Had in One Day?", date: "2017-06-20 12:30:00PM", time: "2017-06-20 12:30:00PM", address: "1624 Wisconsin Ave. NW, Washington, DC ", seats: 10)
Event.create!(city_id: 6, host_id: 3, title: "Mini Bobas vs Regular Bobas", date: "2017-10-16 09:30:00PM", time: "2017-10-16 09:30:00PM", address: "129 E 45th St. New York, NY", seats: 9)
Event.create!(city_id: 1, host_id: 1, title: "Popping bobas?!", date: "2017-08-08 01:00:00PM", time: "2017-08-08 01:00:00PM", address: "528 Larkin St. San Francisco, CA", seats: 9)
Event.create!(city_id: 2, host_id: 2, title: "Grass Jelly in Your Belly", date: "2017-11-20 11:00:00AM", time: "2017-11-20 11:00:00AM", address: "1453 W. Taylor St. Chicago, IL", seats: 10)
Event.create!(city_id: 3, host_id: 2, title: "What's Your Favorite Place For Foba?", date: "2017-11-01 06:30:00PM", time: "2017-11-01 06:30:00PM", address: " 621 S Western Ave. Los Angeles, CA", seats: 7)
Event.create!(city_id: 4, host_id: 1, title: "Coffee Boba?!", date: "2017-06-28 08:30:00PM", time: "2017-06-28 08:30:00PM", address: "1514 4th Ave. Seattle, WA", seats: 5)
Event.create!(city_id: 5, host_id: 3, title: "Boba Happy Hour", date: "2017-07-01 03:30:00PM", time: "2017-07-01 03:30:00PM", address: "800 Connecticut Ave. NW, Washington, DC ", seats: 5)
Event.create!(city_id: 6, host_id: 3, title: "Bobasaurs!", date: "2017-08-15 09:30:00PM", time: "2017-08-15 09:30:00PM", address: "2320 86th St. New York, NY", seats: 9)
Event.create!(city_id: 1, host_id: 1, title: "Mango A-go-go", date: "2017-12-10 06:30:00PM", time: "2017-12-10 06:30:00PM", address: "528 Larkin St. San Francisco, CA", seats: 4)
Event.create!(city_id: 2, host_id: 2, title: "", date: "2017-12-10 06:30:00PM", time: "2017-12-10 06:30:00PM", address: "528 Larkin St. San Francisco, CA", seats: 4)


Attendance.create!(user_id: 1, event_id: 1)
Attendance.create!(user_id: 2, event_id: 2)
Attendance.create!(user_id: 3, event_id: 3)
