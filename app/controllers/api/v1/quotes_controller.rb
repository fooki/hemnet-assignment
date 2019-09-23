module Api
  module V1
    class QuotesController < ApiV1Controller
      def index
        response = TronaldDump::GetQuotes.call(query: params[:query])
        render json: response.to_json
      end
    end
  end
end
