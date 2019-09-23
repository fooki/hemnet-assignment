module TronaldDump
  class GetQuotes
    class QueryTooSmallError < StandardError; end

    def self.call(query:)
      raise QueryTooSmallError if String(query).size < 3

      url = "https://api.tronalddump.io/search/quote?query=#{query}"
      body = HTTP.get(url).body
      parse(tronald_response: JSON(body))
    end

    class << self
      private

      def parse(tronald_response:)
        quotes = tronald_response['_embedded']['quotes'].map do |quote|
          { appeared_at: quote['appeared_at'], value: quote['value'] }
        end

        { quotes: quotes }
      end
    end
  end
end
