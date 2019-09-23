import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'
import QuotesList from '../components/quotes_list.jsx'
import SearchBar from '../components/search_bar.jsx'
import { getQuotes } from '../actions/quote_actions'
import debounce from 'lodash/debounce'



class QuotesListContainer extends React.Component {

  onSearchChange = debounce(value => {
    if(value.length >= 3) {
      this.props.getQuotes({query: value})
    }
  }, 250)

  render() {
    return (
      <div>
        <SearchBar
          placeholder={'Search for quotes! 3 characters minimum..'}
          onChange={({target: { value }}) => this.onSearchChange(value)} />
        <QuotesList {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getQuotes: getQuotes}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesListContainer)
