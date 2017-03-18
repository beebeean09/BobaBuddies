@cities.each do |city|
  json.set! city.id.to_s do
    json.id city.id
    json.name city.name
    json.image city.image
  end
end
