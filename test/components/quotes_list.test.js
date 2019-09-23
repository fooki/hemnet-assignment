import '../mocha_helper'
import QuotesList from 'components/quotes_list'


describe('<QuotesList>', () => {
  let entries = Factory.buildList('quote', 5)
  let wrapper = shallow(<QuotesList quotes={{ entries: entries }} />)

  it('renders the provided quotes in a list', () => {
    expect(wrapper.find('ul QuotesListItem')).to.have.lengthOf(5)
  })

  context('without any quotes', () => {
    it('renders an empty list', () => {
      wrapper = shallow(<QuotesList quotes={{ entries: [] }} />)
      expect(wrapper.find('ul')).to.have.lengthOf(1)
    })
  })

  context('when an error exists', () => {
    before(() => {
      wrapper = shallow(
        <QuotesList quotes={{ error: { message: 'ARGH', status: 500 }}} />
      )
    })

    it('renders no list', () => {
      expect(wrapper.find('ul')).to.have.lengthOf(0)
    })

    it('renders an error message', () => {
      expect(wrapper.text()).to.have.string('ARGH')
    })
  })
})
