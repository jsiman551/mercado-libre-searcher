import { render } from '@testing-library/react'
import Home from '@/pages/index'
import { styleTheme } from '@/constants/styles'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

describe('Home', () => {
  it('renders homepage', () => {
    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={styleTheme}>
          <Home />
        </ThemeProvider>
      </Provider>,
    )
    expect(container).toMatchSnapshot()
  })
})
