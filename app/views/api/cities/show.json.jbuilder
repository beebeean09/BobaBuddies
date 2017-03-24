json.extract! @city, :id, :name, :image

# json.events city.events do |event|
#   json.set! event.id
#   json.title event.title
#   json.address event.address
#   json.date event.date.strftime("%F")
#   json.time event.time.strftime("%I:%M %p")
#   json.seats event.seats
# end

json.events @city.events do |event|
  json.partial! 'api/events/event', event: event
end

# json.extract! @city, :id, :name, :image
#
# json.events @city.events do |event|
#   json.partial! 'api/events/event', event: event
# end
