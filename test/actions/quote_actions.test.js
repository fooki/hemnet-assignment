import {
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILURE,
  getQuotes,
  createGetQuotesSuccess,
  createGetQuotesFailure
} from 'actions/quote_actions'

describe('Quote actions', () => {
  let quotes = Factory.buildList('quote', 5)

  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  describe('createGetQuotesSuccess', () => {
    it('returns an action fit for reducers', () => {
      expect(createGetQuotesSuccess({quotes})).
        to.deep.equal({ type: GET_QUOTES_SUCCESS, payload: quotes })
    })
  })

  describe('createGetQuotesFailure', () => {
    let errorResponse = { status: '409', error: 'blah' }
    let expectedPayload = { status: '409', message: 'blah' }

    it('returns a failure action fit for reducers', () => {
      expect(createGetQuotesFailure({ info: errorResponse })).
        to.deep.equal({ type: GET_QUOTES_FAILURE, payload: expectedPayload})
    })
  })

  describe('getQuotes', () => {
    context('when the api server responds successfully', () => {
      before(() => {
        // Note: We test the query implictly here. Not great, but not sure how
        // to write a test for it without taking a lot of time.
        moxios.stubRequest(/.*\?query=Sanders/, {
          status: 200,
          response: { quotes: quotes }
        })
      })

      it('dispatches a GET_QUOTES_SUCCESS action', () => {
        let disp = sinon.spy()
        return getQuotes({query: 'Sanders'})(disp).then(() => {
          expect(disp).to.have.been.calledWith(createGetQuotesSuccess({quotes}))
        })
      })
    })

    context('when the api server responds with an error', () => {
      let errorInfo = { error: 'BOOM', status: 666 }

      before(() => {
        // Note: We test the query implictly here. Not great, but not sure how
        // to write a test for it without taking a lot of time.
        moxios.stubRequest(/.*\?query=Sanders/, {
          status: 501,
          response: errorInfo
        })
      })

      it('dispatches a GET_QUOTES_FAILURE action', () => {
        let disp = sinon.spy()
        return getQuotes({query: 'Sanders'})(disp).then(() => {
          expect(disp).to.have.been.calledWith(
            createGetQuotesFailure({info: errorInfo})
          )
        })
      })
    })
  })
})
