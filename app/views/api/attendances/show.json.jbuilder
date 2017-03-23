json.extract! @attendance, :id, :user_id, :event_id

json.event do
  json.partial! 'api/events/event', event: @event
end
