@cities.each do |city|
  json.set! city.id.to_s do
    json.id city.id
    json.name city.name
    json.image city.image
    json.events city.events do |event|
      json.set! event.id
      json.id event.id
      json.title event.title
      json.address event.address
      json.date event.date.strftime("%F")
      json.time event.time.strftime("%I:%M %p")
      json.seats event.seats
    end
  end
end
