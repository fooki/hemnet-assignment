feature 'Root page', js: true do
  let(:quotes) do
    [{ 'appeared_at' => '2014-04-04', 'value' => 'I love Obama' },
     { 'appeared_at' => '2016-06-04', 'value' => 'Obama ftw!' }]
  end

  let(:body) do
    build(:tronald_response, query: 'Obama', quotes: quotes)
  end

  before { stub_request(:get, /tronald/).to_return(body: body) }

  scenario 'User sees no quotes before searching with at least 3 letters' do
    visit root_path
    find('#search-quotes').set('Ob')
    expect(page).to have_no_css('li')
  end

  scenario 'User searches for hillary quotes' do
    visit root_path

    find('#search-quotes').set('Obama')

    within 'ul' do
      expect(page).to have_content('I love Obama')
      expect(page).to have_content('Obama ftw!')
    end
  end

  context 'When the external api is down' do
    before { stub_request(:get, /tronald/).to_raise(HTTP::ConnectionError) }

    scenario 'User sees that the service is unavailable' do
      visit root_path

      find('#search-quotes').set('Obama')

      expect(page).to have_content('Service Unavailable')
    end
  end
end
