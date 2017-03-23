# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# City.delete_all
Event.delete_all

User.create( email: "bobabuddies@gmail.com", password: "bobaboba", first_name: "Buddy", host: false )
User.create( email: "paul@gmail.com", password: "iloveboba", first_name: "Paul", host: true )
User.create( email: "sarah@gmail.com", password: "iloveboba", first_name: "Sarah", host: true )

City.create!(name: "San Francisco", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/SF_vysi0o.jpg')
City.create!(name: "Chicago", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490067089/Chicago_i9fiwb.jpg')
City.create!(name: "Los Angeles", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057534/los_angeles_cmfmup.jpg')
City.create!(name: "Seattle", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057536/seattle_lcuoan.jpg')
City.create!(name: "Washington D.C.", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/washington_dc_cvix4r.jpg')
City.create!(name: "New York", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057535/NY_ezvbug.jpg')


Event.create!(city_id: 1, host_id: 2, title: "Milk Tea Boba Party", date: "2017-10-09 12:00:00", time: "2017-10-09 12:00:00", address: "135 4th St. San Francisco, CA", seats: 15)
Event.create!(city_id: 2, host_id: 2, title: "What is Boba?!", date: "2017-05-20", time: "09:00:00", address: "333 S. State St. Chicago, IL", seats: 10)
Event.create!(city_id: 3, host_id: 2, title: "How much boba...is too much boba??", date: "2017-07-01", time: "03:30:00", address: "700 Western St. Los Angeles, CA", seats: 7)
Event.create!(city_id: 4, host_id: 3, title: "Alcoholic Boba Drinks", date: "2017-06-28", time: "06:30:00", address: "606 E. Pine St. Seattle, WA", seats: 20)
Event.create!(city_id: 5, host_id: 3, title: "Cup of Boba a day, keeps the doctor away~", date: "2017-09-05", time: "10:00:00", address: "400 8th St. NW, Washington, DC ", seats: 10)
Event.create!(city_id: 6, host_id: 3, title: "Matcha Boba Drinks!", date: "2017-08-15", time: "02:30:00", address: "23 Clinton St. New York, NY", seats: 9)
Event.create!(city_id: 1, host_id: 1, title: "Milk Tea vs. Tea", date: "2017-10-09 12:00:00", time: "2017-10-09 6:15:00", address: "1139 Taraval St. San Francisco, CA", seats: 15)
Event.create!(city_id: 2, host_id: 1, title: "Find your pearl", date: "2017-05-20", time: "09:00:00", address: "2126 S Archer Ave. Chicago, IL", seats: 10)
Event.create!(city_id: 3, host_id: 1, title: "How many bobas are in your average cup?", date: "2017-07-01", time: "05:30:00", address: "713481 Euclid St. Garden Grove, CA", seats: 7)
Event.create!(city_id: 4, host_id: 1, title: "Fruit Smoothies and Boba?!", date: "2017-06-28", time: "08:30:00", address: "619 S King St. Seattle, WA", seats: 20)
Event.create!(city_id: 5, host_id: 3, title: "What's the most you've had in one day?", date: "2017-09-05", time: "12:30:00", address: "1624 Wisconsin Ave. NW, Washington, DC ", seats: 10)
Event.create!(city_id: 6, host_id: 3, title: "Mini Bobas vs Regular Bobas", date: "2017-08-15", time: "09:30:00", address: "129 E 45th St. New York, NY", seats: 9)


Attendance.create!(user_id: 1, event_id: 1)
Attendance.create!(user_id: 2, event_id: 2)
Attendance.create!(user_id: 3, event_id: 3)
