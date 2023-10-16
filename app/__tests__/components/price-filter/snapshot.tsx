import PriceFilter from '@/components/price-filter'
import { store } from '@/redux/store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

it('renders price filter component', () => {
  const priceRangeformRef = { current: document.createElement('form') }
  const setPriceRangeSubmit = jest.fn()
  const { container } = render(
    <Provider store={store}>
      <PriceFilter
        priceRangeformRef={priceRangeformRef}
        priceRangeSubmit={false}
        setPriceRangeSubmit={setPriceRangeSubmit}
      />
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
