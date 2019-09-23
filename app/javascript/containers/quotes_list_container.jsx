import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'
import QuotesList from '../components/quotes_list.jsx'
import { getQuotes } from '../actions/quote_actions'

class QuotesListContainer extends React.Component {
  // TODO: Read up on React Hooks
  componentDidMount() {
    this.props.getQuotes()
  }

  render() {
    return (
      <QuotesList {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes.entries }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getQuotes: getQuotes}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesListContainer)
