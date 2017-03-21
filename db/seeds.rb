# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create({ email: "bobabuddies@gmail.com", password: "bobaboba", first_name: "Buddy", host: false })

City.create!(name: "San Francisco", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/SF_vysi0o.jpg')
City.create!(name: "London", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/london_tqwih7.jpg')
City.create!(name: "Los Angeles", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057534/los_angeles_cmfmup.jpg')
City.create!(name: "Seattle", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057536/seattle_lcuoan.jpg')
City.create!(name: "Washington D.C.", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057537/washington_dc_cvix4r.jpg')
City.create!(name: "New York", image: 'http://res.cloudinary.com/beebeean09/image/upload/v1490057535/NY_ezvbug.jpg')
