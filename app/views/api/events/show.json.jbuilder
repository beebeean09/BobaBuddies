json.extract! @event, :id, :host_id, :city_id, :title, :address, :seats

json.date @event.date.strftime("%F")
json.time @event.time.strftime("%H:%M")
