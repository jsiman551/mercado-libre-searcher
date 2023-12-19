import Content from '@/components/content'
import { styleTheme } from '@/constants/styles'
import { store } from '@/redux/store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

it('renders content component', () => {
  const { container } = render(
    <Provider store={store}>
      <ThemeProvider theme={styleTheme}>
        <Content />
      </ThemeProvider>
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
