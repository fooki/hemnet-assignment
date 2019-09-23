describe 'GET /api/v1/quotes' do
  let(:params) { { query: 'Obama' } }

  subject { get('/api/v1/quotes', params: params) && response }

  context 'with a query paramer' do
    let(:quotes) do
      [{ 'appeared_at' => '2014-04-04', 'value' => 'I love Obama' }]
    end

    let(:body) do
      build(:tronald_response, query: 'Obama', quotes: quotes)
    end

    before { stub_request(:get, /.*/).to_return(body: body) }

    it { is_expected.to have_http_status :success }

    it 'returns a json with the found quotes' do
      expect(JSON(subject.body)).to eq('quotes' => quotes)
    end
  end

  context 'without a query parameter' do
    let(:params) { {} }

    it { is_expected.to have_http_status :bad_request }
  end

  context 'with a too small query parameter' do
    let(:params) { { query: 'a' } }
    it { is_expected.to have_http_status :bad_request }
  end

  context 'when the external api is down' do
    before do
      stub_request(:get, /api.tronalddump.io/).to_raise(HTTP::ConnectionError)
    end

    it { is_expected.to have_http_status :service_unavailable }
  end
end
