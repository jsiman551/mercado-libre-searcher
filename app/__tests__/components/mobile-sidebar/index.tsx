import { render, screen, fireEvent } from '@testing-library/react'
import MobileSidebar from '@/components/mobile-sidebar'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import 'jest-styled-components'

describe('MobileSidebar', () => {
  const priceRangeformRef = { current: document.createElement('form') }
  const setPriceRangeSubmit = jest.fn()
  it('renders MobileSidebar component with initial open state', () => {
    render(
      <Provider store={store}>
        <MobileSidebar
          priceRangeformRef={priceRangeformRef}
          priceRangeSubmit={false}
          setPriceRangeSubmit={setPriceRangeSubmit}
        />
      </Provider>,
    )

    expect(screen.getByTestId('sidebarContainer')).toHaveStyleRule(
      "transform: 'translate(0)'",
    )
    expect(screen.getByText('Cerrar')).toBeInTheDocument()
  })

  it('closes the sidebar when the close button is clicked', () => {
    render(
      <Provider store={store}>
        <MobileSidebar
          priceRangeformRef={priceRangeformRef}
          priceRangeSubmit={false}
          setPriceRangeSubmit={setPriceRangeSubmit}
        />
      </Provider>,
    )

    const closeButton = screen.getByText('Cerrar')

    // Mock necessary actions
    const mockDispatch = jest.fn()
    jest.spyOn(store, 'dispatch').mockImplementation(mockDispatch)

    // Click close button
    fireEvent.click(closeButton)

    mockDispatch({ type: 'GET_FLAG', payload: false })

    expect(screen.getByTestId('sidebarContainer')).toHaveStyleRule(
      "transform: 'translate(-252px)'",
    )
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'GET_FLAG',
      payload: false,
    })
  })
})
