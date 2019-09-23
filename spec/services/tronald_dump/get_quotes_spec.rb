describe TronaldDump::GetQuotes do
  subject { described_class.call(query: query) }

  let(:query) { 'hillary' }
  # TODO: remove hardcoding
  let(:url) { "https://api.tronalddump.io/search/quote?query=#{query}" }

  context 'when the external api returns matching qoutes' do
    let(:quotes) do
      [
        { appeared_at: '2012-01-01', value: 'hillary this' },
        { appeared_at: '2014-04-04', value: 'hillary that' }
      ]
    end

    let(:response) do
      build(:tronald_response, query: 'hillary', quotes: quotes)
    end

    before { stub_request(:get, url).to_return(body: response) }

    it 'parses and returns the results' do
      expect(subject).to eq(quotes: quotes)
    end
  end

  context 'when the external api finds no quotes matching the query' do
    let(:quotes) { [] }
    let(:response) do
      build(:tronald_response, query: 'I have made mistakes', quotes: [])
    end

    before { stub_request(:get, url).to_return(body: response) }

    it 'parses and returns the empty results' do
      expect(subject).to eq(quotes: [])
    end
  end

  context 'when provided with a query with a size less than 3' do
    let(:query) { 'no' }

    it 'raises an error' do
      expect { subject }
        .to raise_error(TronaldDump::GetQuotes::QueryTooSmallError)
    end
  end

  context 'when the external api is down' do
    before do
      stub_request(:get, url).to_raise(HTTP::ConnectionError)
    end

    it 'raises an http error' do
      expect { subject }.to raise_error(HTTP::ConnectionError)
    end
  end
end
