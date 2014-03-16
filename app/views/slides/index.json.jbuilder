json.array!(@slides) do |slide|
  json.extract! slide, :id, :content
  json.url slide_url(slide, format: :json)
end
