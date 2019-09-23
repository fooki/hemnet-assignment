import { Factory } from 'rosie'

Factory.define('quote')
  .sequence('value', (n) => `quote text ${n}`)
  .attr('appeared_at', () => new Date())
