import '../mocha_helper'
import QuotesListItem from 'components/quotes_list_item'
import { Factory } from 'rosie'

describe('<QuotesListItem>', () => {
  const quote = Factory.build('quote', { value: 'HEJ', appeared_at: '2018-04-02'})
  const wrapper = shallow(<QuotesListItem {...quote} />)

  it('renders the provided quote text and dated appeared', () => {
    expect(wrapper.find('li').text()).to.have.string('2018-04-02: HEJ')
  })
})
