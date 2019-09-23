import '../mocha_helper'
import QuotesList from 'components/quotes_list'


describe('<QuotesList>', () => {
  let quotes = Factory.buildList('quote', 5)
  let wrapper = shallow(<QuotesList quotes={quotes} />)

  it('renders the provided quotes in a list', () => {
    expect(wrapper.find('ul QuotesListItem')).to.have.lengthOf(5)
  })

  context('without any quotes', () => {
    quotes = Factory.buildList('quote', 5)
    wrapper = shallow(<QuotesList quotes={quotes} />)

    it('renders an empty list', () => {
      expect(wrapper.find('ul')).to.have.lengthOf(1)
    })
  })
})
