json.extract! user, :id, :email, :first_name, :host, :profile_image

json.events user.events.each do |event|

    json.id event.id
    json.title event.title
    json.address event.address
    json.date event.date.strftime("%A %b %d")
    json.time event.time.strftime("%I:%M %p")
    json.seats event.seats
    json.host event.host

end


json.hosted_events user.hosted_events do |event|

    json.id event.id
    json.title event.title
    json.address event.address
    json.date event.date.strftime("%A %b %d")
    json.time event.time.strftime("%I:%M %p")
    json.seats event.seats
    json.host event.host

end
