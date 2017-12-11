// @flow

import axios from 'axios';
import React, { Component } from 'react';
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
  state = {
    apiData: { rating: '' }
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.show.imdbID}`).then(response => {
      this.setState({ apiData: response.data });
    });
  }
  props: {
    show: Show
  };
  render() {
    const { title, poster, year, description, trailer } = this.props.show;
    let ratingsComponent;
    if (this.state.apiData.rating) {
      ratingsComponent = <h3>{this.state.apiData.rating}</h3>;
    } else {
      ratingsComponent = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingsComponent}
          <img src={`/public/img/posters/${poster}`} alt={`${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`http://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

export default Details;
