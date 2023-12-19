import { render } from '@testing-library/react'
import SortSelector from '@/components/sort-selector'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { styleTheme } from '@/constants/styles'
import { ThemeProvider } from 'styled-components'

it('renders sort opctions selector unchanged', () => {
  const { container } = render(
    <Provider store={store}>
      <ThemeProvider theme={styleTheme}>
        <SortSelector />
      </ThemeProvider>
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
