json.extract! @attendance, :id, :user_id, :event_id

json.event do
  json.partial! 'api/events/event', event: @event
end


json.events @attendance.user.events.each do |event|

    json.id event.id
    json.title event.title
    json.address event.address
    json.date event.date.strftime("%F")
    json.time event.time.strftime("%I:%M %p")
    json.seats event.seats

end


json.hosted_events @attendance.user.hosted_events do |event|

    json.id event.id
    json.title event.title
    json.address event.address
    json.date event.date.strftime("%F")
    json.time event.time.strftime("%I:%M %p")
    json.seats event.seats

end
