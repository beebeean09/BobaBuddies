json.extract! user, :id, :email, :first_name, :host

json.events user.events.each do |event|

    json.id event.id
    json.title event.title
    json.address event.address
    json.date event.date.strftime("%F")
    json.time event.time.strftime("%I:%M %p")
    json.seats event.seats

end


json.hosted_events user.hosted_events do |event|

    json.id event.id
    json.title event.title
    json.address event.address
    json.date event.date.strftime("%F")
    json.time event.time.strftime("%I:%M %p")
    json.seats event.seats

end
