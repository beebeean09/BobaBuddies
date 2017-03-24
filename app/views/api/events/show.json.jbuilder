json.extract! @event, :id, :host_id, :city_id, :title, :address, :seats

json.date @event.date.strftime("%A %b %d")
json.time @event.time.strftime("%I:%M %p")
