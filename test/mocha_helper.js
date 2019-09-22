import { expect } from 'chai'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import moxios from 'moxios'
import axios from 'axios'


global.expect = expect
global.shallow = shallow
global.React = React
global.moxios = moxios
global.axios = axios

configure({ adapter: new Adapter() })
