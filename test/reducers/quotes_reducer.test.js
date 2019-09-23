import reducer from 'reducers/quotes_reducer'
import {
  createGetQuotesFailure,
  createGetQuotesSuccess
} from 'actions/quote_actions'

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

  describe('GET_QUOTES_FAILURE', () => {
    let errorResponse = { status: '409', error: 'blah' }

    context('from initial state', () => {
      it('adds error information', () => {
        expect(reducer(undefined, createGetQuotesFailure({info: errorResponse}))).
          to.deep.equal({entries: [], error: { status: '409', message: 'blah'}})
      })
    })

    context('from a state where quotes exists', () => {
      it('keeps the existing quotes and adds error information', () => {
        let withQuotes = reducer(undefined, createGetQuotesSuccess({quotes}))

        expect(reducer(withQuotes, createGetQuotesFailure({info: errorResponse}))).
          to.deep.equal({
            entries: withQuotes.entries,
            error: { status: '409', message: 'blah'}
          })
      })
    })
  })
})
