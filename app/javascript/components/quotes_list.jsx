import React from 'react'
import QuoteListItem from '../components/quotes_list_item'

const QuotesList = ({ quotes }) => {
  if(quotes.error) {
    return (
      <div className="row">
        <div className="col">
          {quotes.error.message}
        </div>
      </div>
    )
  } else {
    return (
      <div className="row">
        <div className="col">
          <ul className='list-group list-group-flush'>
            {quotes.entries.map((quote, i) => <QuoteListItem key={i} {...quote}/>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default QuotesList
