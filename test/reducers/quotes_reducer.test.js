import reducer from 'reducers/quotes_reducer'
import { createGetQuotesSuccess } from 'actions/quote_actions'

describe('QuotesReducer', () => {
  let quotes = Factory.buildList('quote', 5)

  describe('UNKNOWN actions', () => {
    context('from initial state', () => {
      it('returns an empty list of  entries', () => {
        expect(reducer(undefined, { type: 'CRAPPY_PRESIDENTS_UNITE'})).
          to.deep.equal({entries: []})
      })
    })
  })

  describe('GET_QUOTES_SUCCESS', () => {
    context('from initial state', () => {
      it('adds the quotes to the list of entries', () => {
        expect(reducer(undefined, createGetQuotesSuccess({quotes}))).
          to.deep.equal({entries: quotes})
      })
    })

    context('from a state where quotes exists', () => {
      let newQuotes = Factory.buildList('quote', 3)

      it('replaces the old quotes', () => {
        let withQuotes = reducer(undefined, createGetQuotesSuccess({quotes}))

        expect(reducer(withQuotes, createGetQuotesSuccess({quotes: newQuotes}))).
          to.deep.equal({entries: newQuotes})
      })
    })
  })
})
