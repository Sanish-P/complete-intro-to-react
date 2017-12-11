import { setSearchTerm, addAPIData } from '../actionCreators';

test('setSearchTerm', () => {
  const SET_SEARCH_TERM = setSearchTerm('New York');
  expect(SET_SEARCH_TERM).toMatchSnapshot();
});

test('addAPIData', () => {
  const ADD_API_DATA = addAPIData({
    title: 'Atlanta',
    year: '2008–2013',
    description:
      'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
    poster: 'a.jpg',
    imdbID: 'tt4288182',
    trailer: 'MpEdJ-mmTlY',
    rating: '8.2'
  });
  expect(ADD_API_DATA).toMatchSnapshot();
});
