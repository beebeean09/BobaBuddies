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
User.create( email: "bobabuddies@gmail.com", password: "bobaboba", first_name: "Boba Master", host: false, profile_image: "http://res.cloudinary.com/beebeean09/image/upload/v1490342606/boba_fett-10_1x_wzaqyy.png" )
User.create( email: "jacob@gmail.com", password: "bobaboba", first_name: "Jacob", host: false, profile_image: "http://res.cloudinary.com/beebeean09/image/upload/v1491936390/man_e497pd.jpg")
User.create( email: "paul@gmail.com", password: "iloveboba", first_name: "Paul", host: true, profile_image: "http://res.cloudinary.com/beebeean09/image/upload/c_scale,h_322/v1492382593/man2_hiwjgi.jpg")
User.create( email: "will@gmail.com", password: "iloveboba2", first_name: "Will", host: true, profile_image: "http://res.cloudinary.com/beebeean09/image/upload/c_scale,h_281/v1492385286/brad_us4clm.jpg")
User.create( email: "sarah2@gmail.com", password: "iloveboba2", first_name: "Sarah", host: true, profile_image: "http://res.cloudinary.com/beebeean09/image/upload/c_scale,h_328/v1492382659/girl_liku3y.jpg")
User.create( email: "sharon@gmail.com", password: "iloveboba2", first_name: "Sharon", host: true, profile_image: "https://res.cloudinary.com/beebeean09/image/upload/v1492382540/emma_bqlxlp.jpg")

City.create!(name: "San Francisco", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/SF_vysi0o.jpg')
City.create!(name: "Chicago", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490067089/Chicago_i9fiwb.jpg')
City.create!(name: "Los Angeles", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057534/los_angeles_cmfmup.jpg')
City.create!(name: "Seattle", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057536/seattle_lcuoan.jpg')
City.create!(name: "Washington D.C.", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/washington_dc_cvix4r.jpg')
City.create!(name: "New York", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057535/NY_ezvbug.jpg')


Event.create!(city_id: 1, host_id: 2, title: "Milk Tea Boba Party", date: "2017-10-09 12:00:00PM", time: "2017-10-09 12:00:00PM", address: "135 4th St. San Francisco, CA", seats: 6)
Event.create!(city_id: 2, host_id: 2, title: "What Is Boba?!", date: "2017-10-20 09:00:00PM", time: "2017-10-20 09:00:00PM", address: "333 S. State St. Chicago, IL", seats: 10)
Event.create!(city_id: 3, host_id: 2, title: "How Much Boba...Is Too Much Boba??", date: "2017-11-01 03:30:00PM", time: "2017-11-01 03:30:00PM", address: "700 Western St. Los Angeles, CA", seats: 7)
Event.create!(city_id: 4, host_id: 3, title: "Alcoholic Boba Drinks", date: "2017-12-28 12:30:00PM", time: "2017-12-28 12:30:00PM", address: "606 E. Pine St. Seattle, WA", seats: 4)
Event.create!(city_id: 5, host_id: 3, title: "Boba a Day, Keeps the Doctor Away~", date: "2017-09-10 10:00:00PM", time: "2017-09-10 10:00:00PM", address: "400 8th St. NW, Washington, DC ", seats: 10)
Event.create!(city_id: 6, host_id: 3, title: "Matcha Boba Drinks!", date: "2017-08-15 02:30:00PM", time: "2017-08-15 02:30:00PM", address: "23 Clinton St. New York, NY", seats: 9)
Event.create!(city_id: 1, host_id: 1, title: "Milk Tea vs. Tea", date: "2017-10-09 12:00:00PM", time: "2017-10-09 12:00:00PM", address: "1139 Taraval St. San Francisco, CA", seats: 6)
Event.create!(city_id: 2, host_id: 1, title: "Find Your Pearl", date: "2017-11-20 09:00:00PM", time: "2017-11-20 09:00:00PM", address: "2126 S Archer Ave. Chicago, IL", seats: 10)
Event.create!(city_id: 3, host_id: 1, title: "How Many Bobas Are in Your Average Cup?", date: "2017-10-01 10:30:00PM", time: "2017-10-01 10:30:00PM", address: "713481 Euclid St. Garden Grove, CA", seats: 7)
Event.create!(city_id: 4, host_id: 1, title: "Fruit Smoothies and Boba?!", date: "2017-11-26 08:30:00PM", time: "2017-11-26 08:30:00PM", address: "619 S King St. Seattle, WA", seats: 8)
Event.create!(city_id: 5, host_id: 3, title: "What's the Most Boba You've Had in One Day?", date: "2017-06-20 12:30:00PM", time: "2017-06-20 12:30:00PM", address: "1624 Wisconsin Ave. NW, Washington, DC ", seats: 10)
Event.create!(city_id: 6, host_id: 3, title: "Mini Bobas vs Regular Bobas", date: "2017-10-16 09:30:00PM", time: "2017-10-16 09:30:00PM", address: "129 E 45th St. New York, NY", seats: 9)
Event.create!(city_id: 1, host_id: 1, title: "Popping bobas?!", date: "2017-10-10 01:00:00PM", time: "2017-10-10 01:00:00PM", address: "528 Larkin St. San Francisco, CA", seats: 9)
Event.create!(city_id: 2, host_id: 2, title: "Grass Jelly in Your Belly", date: "2017-11-20 11:00:00AM", time: "2017-11-20 11:00:00AM", address: "1453 W. Taylor St. Chicago, IL", seats: 10)
Event.create!(city_id: 3, host_id: 2, title: "What's Your Favorite Place For Foba?", date: "2017-11-01 06:30:00PM", time: "2017-11-01 06:30:00PM", address: "621 S. Western Ave. Los Angeles, CA", seats: 7)
Event.create!(city_id: 4, host_id: 1, title: "Coffee Boba?!", date: "2017-09-28 10:30:00PM", time: "2017-09-28 10:30:00AM", address: "1514 4th Ave. Seattle, WA", seats: 5)
Event.create!(city_id: 5, host_id: 3, title: "Boba Happy Hour", date: "2017-11-01 03:30:00PM", time: "2017-11-01 03:30:00PM", address: "800 Connecticut Ave. NW, Washington, DC ", seats: 5)
Event.create!(city_id: 6, host_id: 3, title: "Bobasaurs!", date: "2017-10-15 09:30:00PM", time: "2017-10-15 09:30:00PM", address: "2320 86th St. New York, NY", seats: 9)
Event.create!(city_id: 1, host_id: 1, title: "Mango A-go-go", date: "2017-12-10 09:30:00PM", time: "2017-12-10 09:30:00PM", address: "528 Larkin St. San Francisco, CA", seats: 4)
Event.create!(city_id: 2, host_id: 2, title: "Meet the Boba Master!", date: "2017-12-10 06:30:00PM", time: "2017-12-10 06:30:00PM", address: "528 Larkin St. San Francisco, CA", seats: 4)
Event.create!(city_id: 1, host_id: 4, title: "Boba Bear", date: "2017-11-11 09:00:00PM", time: "2017-11-11 09:00:00PM", address: "3620 Balboa St. San Francisco, CA", seats: 4)
Event.create!(city_id: 2, host_id: 5, title: "Hello Jasmine", date: "2017-11-27 1:30:00PM", time: "2017-11-27 1:30:00PM", address: "131 North Clinton St. Chicago, IL", seats: 5)
Event.create!(city_id: 3, host_id: 6, title: "Boba Time!", date: "2017-10-10 12:00:00PM", time: "2017-10-10 12:00:00PM", address: "623 E 12th St. Los Angeles, CA 90015", seats: 2)
Event.create!(city_id: 4, host_id: 4, title: "Burrito and Boba?", date: "2017-12-01 01:30:00PM", time: "2017-12-01 01:30:00PM", address: "519 6th Ave. S, Seattle, WA", seats: 6)
Event.create!(city_id: 5, host_id: 5, title: "Flower Infused Drinks.. Why Not?!", date: "2017-09-01 12:00:00PM", time: "2017-09-01 12:00:00PM", address: "400 8th St. NW, Washington, DC", seats: 5)
Event.create!(city_id: 6, host_id: 6, title: "Bobasaurs!", date: "2017-10-15 09:30:00PM", time: "2017-10-15 09:30:00PM", address: "2320 86th St. New York, NY", seats: 7)
Event.create!(city_id: 1, host_id: 4, title: "Meet the Boba Master!", date: "2017-09-22 05:00:00PM", time: "2017-09-22 05:00:00PM", address: "103 Waverly Pl. San Francisco, CA", seats: 3)
Event.create!(city_id: 2, host_id: 5, title: "Mix Juice With Tea", date: "2017-10-11 01:00:00PM", time: "2017-10-11 01:00:00PM", address: "1843 W. North Ave. Chicago, IL", seats: 3)


Attendance.create!(user_id: 1, event_id: 1)
Attendance.create!(user_id: 2, event_id: 2)
Attendance.create!(user_id: 3, event_id: 3)
