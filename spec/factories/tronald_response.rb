FactoryBot.define do
  factory :tronald_response, class: String do
    skip_create

    query { 'obama' }
    quotes { ['lala'] }

    initialize_with do
      page = 1
      {
        "count": quotes.size,
        "total": quotes.size,
        "_embedded": { "quotes": quotes },
        "_links": {
          "self": {
            "href": "/search/quote?query=#{query}&page=#{page}"
          },
          "prev": {
            "href": "/search/quote?query=#{query}"
          },
          "first": {
            "href": "/search/quote?query=#{query}"
          },
          "last": {
            "href": "/search/quote?query=#{query}&page=#{page}"
          }
        }
      }.to_json
    end
  end
end
