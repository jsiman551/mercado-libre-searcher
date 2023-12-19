import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Content from '@/components/content'
import { ThemeProvider } from 'styled-components'
import { styleTheme } from '@/constants/styles'

const mockStore = configureStore([])

describe('Content component', () => {
  it('renders HeaderSearcher and EmptyState components', () => {
    const Mockedstore = mockStore({
      searchData: {
        result: null,
        loading: false,
        priceFilters: [],
      },
      searchInput: {
        value: '',
      },
      sortOption: {
        option: {
          name: 'Más relevantes',
          id: 'relevance',
        },
      },
      mobileSidebarFlag: {
        flag: false,
      },
      priceRange: {
        value: '',
      },
    })

    render(
      <Provider store={Mockedstore}>
        <ThemeProvider theme={styleTheme}>
          <Content />
        </ThemeProvider>
      </Provider>,
    )

    expect(screen.getByTestId('headerContainer')).toBeInTheDocument()
    expect(screen.getByTestId('emptyResultsContainer')).toBeInTheDocument()
  })

  it('renders PriceFilter and Sidebar components when resultData is available', () => {
    const mockResultData = mockStore({
      searchData: {
        result: {
          title: 'Casa En Venta En Ecuestre (new)',
          price: 500,
          address: {
            state_name: 'Bs.As. Costa Atlántica',
            city_name: 'Costa Esmeralda',
          },
          thumbnail:
            'http://http2.mlstatic.com/D_934244-MLA72205123280_102023-I.jpg',
          shipping: {
            free_shipping: false,
          },
          condition: 'New',
          permalink:
            'https://casa.mercadolibre.com.ar/MLA-1537731218-casa-en-venta-en-ecuestre-_JM',
        },
        loading: false,
        priceFilters: [
          {
            name: 'Hasta $ 30.000.000',
            results: 55672,
            id: '*-3.0E7',
          },
        ],
      },
      searchInput: {
        value: 'casas',
      },
      sortOption: {
        option: {
          name: 'Más relevantes',
          id: 'relevance',
        },
      },
      mobileSidebarFlag: {
        flag: false,
      },
      priceRange: {
        value: '',
      },
    })

    render(
      <Provider store={mockResultData}>
        <ThemeProvider theme={styleTheme}>
          <Content />
        </ThemeProvider>
      </Provider>,
    )

    expect(screen.getByTestId('priceFilterContainer')).toBeInTheDocument()
    expect(screen.getByTestId('sidebarContainer')).toBeInTheDocument()
  })
})
