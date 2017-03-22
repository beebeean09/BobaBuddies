json.extract! @city, :id, :name, :image

json.events @city.events do |event|
  json.partial! 'api/events/event', event: event
end
