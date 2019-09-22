RSpec.feature 'Root page' do
  scenario 'User sees the welcoming heading', js: true do
    visit root_path
    expect(page).to have_css('div', text: 'Hello React!')
  end
end
