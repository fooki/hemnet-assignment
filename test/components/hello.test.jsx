import '../mocha_helper'
import Hello from 'components/hello'

describe('<Hello>', () => {
  it('renders a hello to the provided name', () => {
    let wrapper = shallow(<Hello name='Kalle' />)
    expect(wrapper.find('h1').text()).to.equal('Hello Kalle!')
  })

  context('without prop.name', () => {
    it('renders a hello to DERP', () => {
      let wrapper = shallow(<Hello name='Kalle' />)
      expect(wrapper.find('h1').text()).to.equal('Hello Kalle!')
    })
  })
})
