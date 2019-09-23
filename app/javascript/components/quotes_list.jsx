import React from 'react'
import QuoteListItem from '../components/quotes_list_item'

const QuotesList = ({ quotes }) => {
  let content

  if(quotes.error) {
    content = (
      <div>
        {quotes.error.message}
      </div>
    )
  } else {
    content = (
      <ul className='list-group'>
        {quotes.entries.map((quote, i) => <QuoteListItem key={i} {...quote}/>)}
      </ul>
    )
  }

  return (
    <div className='container'>
      {content}
    </div>
  )
}

export default QuotesList
