import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import HotelItem from '../../components/hotels/hotelItem';

describe('Hotel Item', () => {
  it('renders correctly', () => {
    const hotel = {
      description: 'Test',
      id: 77,
      image: null,
      name: 'Test',
      rating: 5,
      city: { id: 2, name: 'Addis Ababa' },
    };

    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <HotelItem hotel={hotel} />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
