// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux'
import type { RouterHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  }
  gotoSearch = (event) => {
    event.preventDefault();
    this.props.history.push('/search');
  }
  render () {
    return (
      <div className="landing">
        <h1>sVideo</h1>
        <form onSubmit={this.gotoSearch}>
          <input type="text" value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} placeholder="Search" />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ searchTerm : state.searchTerm })
const mapDispatchToProps = (dispatch: Function ) => ({
  handleSearchTermChange (event) {
    dispatch(setSearchTerm(event.target.value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
