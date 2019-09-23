feature 'Root page' do
  let(:quotes) do
    [{ 'appeared_at' => '2014-04-04', 'value' => 'I love Obama' }]
  end

  let(:body) do
    build(:tronald_response, query: 'Obama', quotes: quotes)
  end

  before { stub_request(:get, /tronald/).to_return(body: body) }

  scenario 'User sees quotes about obama', js: true do
    visit root_path

    within 'li' do
      expect(page).to have_content('I love Obama')
    end
  end
end
