@events.each do |event|
  json.set! event.id.to_s do
    json.id event.id
    json.title event.title
    json.address event.address
    json.date event.date
    json.time event.time
    json.seats event.seats
  end
end
