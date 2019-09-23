feature 'Root page' do
  scenario 'User sees the welcoming heading', js: true do
    visit root_path
    within '.jumbotron' do
      expect(page).to have_css('h1', text: 'Hello React!')
    end
  end
end
