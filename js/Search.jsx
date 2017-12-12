// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

// eslint-disable-next-line
const Search = (props: { shows: Array<Show>, searchTerm: string }) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().includes(props.searchTerm.toUpperCase()))
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
