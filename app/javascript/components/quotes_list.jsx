import React from 'react'
import QuoteListItem from '../components/quotes_list_item'

const QuotesList = ({ quotes }) => {
  return (
    <div className='container'>
      <ul className='list-group'>
        {quotes.map((quote, i) => <QuoteListItem key={i} {...quote}/>)}
      </ul>
    </div>
  )
}

export default QuotesList
