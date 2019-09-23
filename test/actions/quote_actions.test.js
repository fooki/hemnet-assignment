import {
  GET_QUOTES_SUCCESS,
  getQuotes,
  createGetQuotesSuccess
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
        return getQuotes({query: 'Sanders'})(disp).then(() => {}).then(() => {
          expect(disp).to.have.been.calledWith(createGetQuotesSuccess({quotes}))
        })
      })
    })

    context('when the api server responds with an error', () => {
      // TODO
    })
  })
})
