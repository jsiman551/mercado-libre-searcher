import { render, screen, fireEvent } from '@testing-library/react'
import MobileSidebar from '@/components/mobile-sidebar'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import 'jest-styled-components'

describe('MobileSidebar', () => {
  it('renders MobileSidebar component with initial open state', () => {
    // Render the component with an initially open sidebar
    render(
      <Provider store={store}>
        <MobileSidebar
          priceRangeformRef={{ current: null }}
          priceRangeSubmit={false}
          setPriceRangeSubmit={() => {}}
        />
      </Provider>,
    )

    expect(screen.getByTestId('sidebarContainer')).toHaveStyleRule(
      "transform: 'translate(0)'",
    )
    expect(screen.getByText('Cerrar')).toBeInTheDocument()
  })

  it('closes the sidebar when the close button is clicked', () => {
    // Render the component with an initially open sidebar
    render(
      <Provider store={store}>
        <MobileSidebar
          priceRangeformRef={{ current: null }}
          priceRangeSubmit={false}
          setPriceRangeSubmit={() => {}}
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
