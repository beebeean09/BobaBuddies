# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create( email: "bobabuddies@gmail.com", password: "bobaboba", first_name: "Buddy", host: false )
User.create( email: "paul@gmail.com", password: "iloveboba", first_name: "Paul", host: true )
User.create( email: "sarah@gmail.com", password: "iloveboba", first_name: "Sarah", host: true )

City.create!(name: "San Francisco", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/SF_vysi0o.jpg')
City.create!(name: "Chicago", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490067089/Chicago_i9fiwb.jpg')
City.create!(name: "Los Angeles", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057534/los_angeles_cmfmup.jpg')
City.create!(name: "Seattle", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057536/seattle_lcuoan.jpg')
City.create!(name: "Washington D.C.", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/washington_dc_cvix4r.jpg')
City.create!(name: "New York", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057535/NY_ezvbug.jpg')


Event.create!(title: "Milk Tea Boba Party", address: "135 4th St., San Francisco, CA", city_id: 1, host_id: 2, date: "2017-10-09", time: "12:00:00", seats: 10)
Event.create!(title: "What is Boba?!", address: "333 S. State St., Chicago, IL", city_id: 2, host_id: 2, date: "2017-05-20", time: "09:00:00", seats: 10)
Event.create!(title: "How much boba...is too much boba??", address: "700 Western St. Los Angeles, CA", city_id: 3, host_id: 2, date: "2017-07-01", time: "3:30:00", seats: 7)
Event.create!(title: "Alcoholic Boba Drinks", address: "606 E. Pine St., Seattle, WA", city_id: 4, host_id: 3, date: "2017-06-28", time: "6:30:00", seats: 20)
Event.create!(title: "Cup of Boba a day, keeps the doctor away~", address: "400 8th St. NW, Washington, DC ", city_id: 5, host_id: 3, date: "2017-09-05", time: "10:00:00", seats: 10)
Event.create!(title: "Matcha Boba Drinks!", address: "23 Clinton St., New York, NY", city_id: 6, host_id: 3, date: "2017-08-15", time: "2:30:00", seats: 10)
