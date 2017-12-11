// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: Show) => (
  <Wrapper to={`/details/${props.imdbID}`}>
    <Image src={`/public/img/posters/${props.poster}`} />
    <h2>{props.title}</h2>
    <h3>{props.year}</h3>
    <p>{props.description}</p>
  </Wrapper>
);

export default ShowCard;
