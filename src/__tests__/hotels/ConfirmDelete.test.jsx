import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import ConfirmDelete from '../../components/hotels/removeHotel/ConfirmDelete';

describe('Confirm Delete', () => {
  const hotel = {
    description: 'Test',
    id: 77,
    image: null,
    name: 'Test',
    rating: 5,
    city: { id: 2, name: 'Addis Ababa' },
  };
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ConfirmDelete hotel={hotel} />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
