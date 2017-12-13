import moxios from 'moxios';
import { setSearchTerm, addAPIData, getAPIDetails } from '../actionCreators';

test('setSearchTerm', () => {
  const SET_SEARCH_TERM = setSearchTerm('New York');
  expect(SET_SEARCH_TERM).toMatchSnapshot();
});

const Atlanta = {
  title: 'Atlanta',
  year: '2008–2013',
  description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
  poster: 'a.jpg',
  imdbID: 'tt4288182',
  trailer: 'MpEdJ-mmTlY',
  rating: '8.2'
};

test('addAPIData', () => {
  const ADD_API_DATA = addAPIData(Atlanta);
  expect(ADD_API_DATA).toMatchSnapshot();
});

test('getAPIDetails', (done: Function) => {
  const dispatchMock = jest.fn(); // spy function
  moxios.withMock(() => {
    getAPIDetails(Atlanta.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: Atlanta
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${Atlanta.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addAPIData(Atlanta));
          done();
        });
    });
  });
});
