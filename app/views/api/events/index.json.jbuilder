# @events.each do |event|
#   json.set! event.id.to_s do
#     json.title event.title
#     json.address event.address
#     json.date event.date.strftime("%F")
#     json.time event.time.strftime("%I:%M %p")
#     json.seats event.seats
#   end
# end

json.id event.id
json.title event.title
json.address event.address
json.date event.date.strftime("%F")
json.time event.time.strftime("%I:%M")
json.seats event.seats
