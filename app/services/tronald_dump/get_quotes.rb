module TronaldDump
  class GetQuotes
    class QueryTooSmallError < StandardError; end

    def self.call(query:)
      raise QueryTooSmallError if String(query).size < 3

      Rails.cache.fetch("tronald-quotes-#{query}", expires_in: 1.hour) do
        Rails.logger.info('tronald cache miss, fetchin data')

        url = "https://api.tronalddump.io/search/quote?query=#{query}"
        body = HTTP.get(url).body

        parse(tronald_json_response: JSON(body))
      end
    end

    class << self
      private

      def parse(tronald_json_response:)
        # need to_h because if there are quotes then we get a hash. Otherwise we
        # get an empty array.
        embedded = tronald_json_response['_embedded'].to_h

        # need to_a because if there are no quotes then 'quotes' is nil
        quotes = embedded['quotes'].to_a.map do |quote|
          { appeared_at: quote['appeared_at'], value: quote['value'] }
        end

        { quotes: quotes }
      end
    end
  end
end
