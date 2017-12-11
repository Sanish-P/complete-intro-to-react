import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from 'complete-intro-to-react/data.json';

test('Search renders correctly', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test('Search renders correct amount of ShowCards', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search renders correct amount of ShowCards for a given search word', () => {
  const component = shallow(<Search shows={preload.shows} />);
  const searchWord = 'black';
  const showCardCount = preload.shows.filter(show => {
    `${show.title} ${show.description}`.toUpperCase().includes(searchWord.toUpperCase());
  }).length;
  component.find('input').simulate('change', { target: { value: searchWord } });
  expect(component.find(ShowCard).length).toEqual(showCardCount);
});
