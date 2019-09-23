import React from 'react'

const QuotesListItem = ({appeared_at, value}) => {
  return (
    <li className='list-group-item'>
      {appeared_at}: {value}
    </li>
  )
}

export default QuotesListItem
