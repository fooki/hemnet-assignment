import '../mocha_helper'
import SearchBar  from 'components/search_bar'

describe('<SearchBar>', () => {
  context('without a placeholder', () => {
    const wrapper = shallow(<SearchBar  />)

    it('renders a default placeholder', () => {
      expect(wrapper.find('input').prop('placeholder')).to.equal('Search...')
    })
  })

  context('with a provided placeholder', () => {
    const wrapper = shallow(<SearchBar placeholder="XYZ" />)

    it('renders the provided placeholder', () => {
      expect(wrapper.find('input').prop('placeholder')).to.equal('XYZ')
    })
  })

  context('with a onChange callback', () => {
    // TODO
  })

  context('without a onChange callback', () => {
    // TODO
  })
})
