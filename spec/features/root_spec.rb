RSpec.feature 'Root page' do
  scenario 'User sees the welcoming heading' do
    visit root_path
    expect(page).to have_css('h1', text: 'Woot!')
  end
end
