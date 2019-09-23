import { expect } from 'chai'
import chai from 'chai'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import moxios from 'moxios'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import axios from 'axios'
import './factories/quotes'
import { Factory } from 'rosie'

global.expect = expect
global.shallow = shallow
global.React = React
global.moxios = moxios
global.axios = axios
global.Factory = Factory
global.sinon = sinon

chai.use(sinonChai)

configure({ adapter: new Adapter() })
