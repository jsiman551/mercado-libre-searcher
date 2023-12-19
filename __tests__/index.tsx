import { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { styleTheme } from '@/constants/styles'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from '@/redux/store'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  }
})

describe('Home', () => {
  it('renders Home, the main page', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={styleTheme}>
          <Home />
        </ThemeProvider>
      </Provider>,
    )
    expect(document.title).toBe('Buscador de Productos')

    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute(
      'content',
      'Buscador de Productos de Mercado Libre',
    )

    const mainElement = screen.getByTestId('mainContainer')
    expect(mainElement).toBeInTheDocument()
  })
})
