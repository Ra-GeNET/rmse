json.array!(@transitions) do |transition|
  json.extract! transition, :id, :name
  json.url transition_url(transition, format: :json)
end
