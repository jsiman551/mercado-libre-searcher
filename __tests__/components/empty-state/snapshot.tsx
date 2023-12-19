import { render } from '@testing-library/react'
import EmptyState from '@/components/empty-state'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { styleTheme } from '@/constants/styles'
import { ThemeProvider } from 'styled-components'

it('renders EmptyState component', () => {
  const { container } = render(
    <Provider store={store}>
      <ThemeProvider theme={styleTheme}>
        <EmptyState />
      </ThemeProvider>
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
