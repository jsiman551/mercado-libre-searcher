import { render } from '@testing-library/react';
import SortSelector from '@/components/sort-selector';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

it('renders sort opctions selector unchanged', () => {
  const { container } = render(
    <Provider store={store}>
      <SortSelector />
    </Provider>
  );
    expect(container).toMatchSnapshot();
});
