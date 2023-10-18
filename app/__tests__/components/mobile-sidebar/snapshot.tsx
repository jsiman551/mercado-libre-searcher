import { render } from '@testing-library/react'
import MobileSidebar from '@/components/mobile-sidebar'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { styleTheme } from '@/constants/styles'
import { ThemeProvider } from 'styled-components'

it('renders MobileSidebar component', () => {
  const { container } = render(
    <Provider store={store}>
      <ThemeProvider theme={styleTheme}>
        <MobileSidebar
          priceRangeformRef={{ current: null }}
          priceRangeSubmit={false}
          setPriceRangeSubmit={() => {}}
        />
      </ThemeProvider>
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
