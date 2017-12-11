import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTerm } from '../actionCreators';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';
import preload from 'complete-intro-to-react/data.json';

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component).toMatchSnapshot();
});

test('Search renders correct amount of ShowCards', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search renders correct amount of ShowCards for a given search word', () => {
  const searchWord = 'black';
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Search shows={preload.shows} />
      </Provider>
    </MemoryRouter>
  );
  const showCardCount = preload.shows.filter(show => {
    `${show.title} ${show.description}`.toUpperCase().includes(searchWord.toUpperCase());
  }).length;
  expect(component.find(ShowCard).length).toEqual(showCardCount);
});
