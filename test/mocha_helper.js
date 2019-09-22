import { expect } from 'chai'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

global.expect = expect
global.shallow = shallow
global.React = React

configure({ adapter: new Adapter() })
