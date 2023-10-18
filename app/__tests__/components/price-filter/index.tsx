// Import necessary libraries and components
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import PriceFilter from '@/components/price-filter'
import { styleTheme } from '@/constants/styles'
import { ThemeProvider } from 'styled-components'

const mockStore = configureStore([])

describe('PriceFilter component', () => {
  it('renders PriceFilter correctly', () => {
    const mockedStore = mockStore({
      searchInput: {
        value: 'camisas',
      },
      searchData: {
        priceFilters: [
          {
            name: 'Hasta $ 30.000.000',
            results: 55672,
            id: '*-3.0E7',
          },
        ],
      },
      mobileSidebarFlag: {
        flag: false,
      },
      priceRange: {
        value: '',
      },
      sortOption: {
        option: {
          id: 'relevance',
          name: 'Más relevantes',
        },
      },
    })

    const priceRangeformRef = { current: document.createElement('form') }
    const setPriceRangeSubmit = jest.fn()

    render(
      <Provider store={mockedStore}>
        <ThemeProvider theme={styleTheme}>
          <PriceFilter
            priceRangeformRef={priceRangeformRef}
            priceRangeSubmit={false}
            setPriceRangeSubmit={setPriceRangeSubmit}
          />
        </ThemeProvider>
      </Provider>,
    )

    expect(screen.getByTestId('priceFilterContainer')).toBeInTheDocument()
    expect(screen.getByText('Precio')).toBeInTheDocument()
    expect(screen.getByText('Hasta $ 30.000.000')).toBeInTheDocument()
    expect(screen.getByText('(55672)')).toBeInTheDocument()
  })
})
