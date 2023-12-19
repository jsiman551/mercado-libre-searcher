import { render } from '@testing-library/react'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import HeaderSearcher from '@/components/header-searcher'
import { styleTheme } from '@/constants/styles'
import { ThemeProvider } from 'styled-components'

it('renders HeaderSearcher component', () => {
  const { container } = render(
    <Provider store={store}>
      <ThemeProvider theme={styleTheme}>
        <HeaderSearcher
          priceRangeformRef={{ current: null }}
          setPriceRangeSubmit={() => {}}
        />
      </ThemeProvider>
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
