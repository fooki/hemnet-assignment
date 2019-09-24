import React from 'react'

const SearchBar = ({onChange, placeholder}) => {
  let change = onChange || (() => {})
  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input
            type="text"
            id="search-quotes"
            className="form-control"
            placeholder={ placeholder || 'Search...'}
            onChange={(event) => change(event)}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
