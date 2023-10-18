import { render, screen } from '@testing-library/react'
import SortSelector from '@/components/sort-selector'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import useOutsideClick from '@/hooks/useOutsideClick'
import { useRef } from 'react'
import { styleTheme } from '@/constants/styles'
import { ThemeProvider } from 'styled-components'

describe('SortSelector', () => {
  it('renders the sort options selector component', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={styleTheme}>
          <SortSelector />
        </ThemeProvider>
      </Provider>,
    )
    const sortContainer = screen.getByTestId('sortContainer')
    expect(sortContainer).toBeInTheDocument()
  })
})

describe('useOutsideClick', () => {
  it('simulate there is an outside click', () => {
    const callback = jest.fn()

    const SortComponent = () => {
      const ref = useRef<HTMLDivElement>(null)
      useOutsideClick(ref, callback)

      return <div ref={ref}>Sort Component</div>
    }

    render(<SortComponent />)

    // Simulate an outside click
    const body = document.body
    const clickEvent = new MouseEvent('click', { bubbles: true })
    body.dispatchEvent(clickEvent)

    // verify callback has been called
    expect(callback).toHaveBeenCalled()
  })
})
