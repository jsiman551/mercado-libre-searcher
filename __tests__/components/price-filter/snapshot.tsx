import PriceFilter from '@/components/price-filter'
import { styleTheme } from '@/constants/styles'
import { store } from '@/redux/store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

it('renders price filter component', () => {
  const priceRangeformRef = { current: document.createElement('form') }
  const setPriceRangeSubmit = jest.fn()
  const { container } = render(
    <Provider store={store}>
      <ThemeProvider theme={styleTheme}>
        <PriceFilter
          priceRangeformRef={priceRangeformRef}
          priceRangeSubmit={false}
          setPriceRangeSubmit={setPriceRangeSubmit}
        />
      </ThemeProvider>
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
