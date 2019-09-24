import React from 'react'

const QuotesListItem = ({appeared_at, value}) => {
  return (
    <li className='list-group-item'>
      <div className="row">
        <div className="col">
          <blockquote>
            {value}
          </blockquote>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="quote-date">
            {new Date(appeared_at).toLocaleDateString()}
          </span>
        </div>
      </div>
    </li>
  )
}

export default QuotesListItem
