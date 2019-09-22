describe ApplicationController do
  render_views

  describe 'GET #show' do
    subject { get :show }
    it { is_expected.to have_http_status :ok }
  end
end
