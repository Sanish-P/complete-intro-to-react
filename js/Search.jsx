// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  props: {
    shows: Array<Show>,
    searchTerm: string
  };
  handleSearchTermChange = (event: KeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <Header showSearch searchTerm={this.props.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        <div>
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`.includes(this.props.searchTerm))
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm})

export default connect(mapStateToProps)(Search);
