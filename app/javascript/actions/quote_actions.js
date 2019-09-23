import axios from 'axios'

export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS'
export const GET_QUOTES_FAILURE = 'GET_QUOTES_FAILURE'

export const createGetQuotesSuccess = ({quotes}) => {
  return ({
    type: GET_QUOTES_SUCCESS,
    payload: quotes
  })
}

export const createGetQuotesFailure = ({info}) => {
  return ({
    type: GET_QUOTES_FAILURE,
    payload: { status: info.status, message: info.error }
  })
}

export const getQuotes = ({query}) => {
  return (dispatch) => {
    return axios.
      get('/api/v1/quotes', { params: { query }}).
      then((response) => {
        return dispatch(
          createGetQuotesSuccess({quotes: response.data.quotes})
        )
      }).catch((error) => {
        let response = error.response
        let data = response ?
          response.data : { status: 503, error: 'The backend is dead :(' }

        return dispatch(
          createGetQuotesFailure({info: data})
        )
      })
  }
}
