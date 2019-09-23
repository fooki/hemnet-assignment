import axios from 'axios'

export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS'

export const createGetQuotesSuccess = ({quotes}) => {
  return ({
    type: GET_QUOTES_SUCCESS,
    payload: quotes
  })
}

export const getQuotes = () => {
  return (dispatch) => {
    return axios.
      get('/api/v1/quotes', { params: { query: 'obama'}}).
      then((response) => {
        return dispatch(
          createGetQuotesSuccess({quotes: response.data.quotes})
        )
      })
  }
}
