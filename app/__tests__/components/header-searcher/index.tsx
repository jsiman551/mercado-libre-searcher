import { render, screen, fireEvent } from '@testing-library/react'
import HeaderSearcher from '@/components/header-searcher'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { GET_SORT_OPTION } from '@/redux/slices/sort-option-slice/types'
import { GET_PRICE_RANGE_VALUE } from '@/redux/slices/price-range-slice/types'
import { GET_SEARCH_INPUT_VALUE } from '@/redux/slices/search-input-slice/types'

describe('HeaderSearcher', () => {
  it('renders HeaderSearcher component with elements', () => {
    render(
      <Provider store={store}>
        <HeaderSearcher
          priceRangeformRef={{ current: null }}
          setPriceRangeSubmit={() => {}}
        />
      </Provider>,
    )

    const headerContainer = screen.getByTestId('headerContainer')
    const searchInput = screen.getByRole('textbox')
    const searchButton = screen.getByRole('button')
    const logoImage = screen.getByAltText('logo')
    const searcherImage = screen.getByAltText('searcher')

    expect(headerContainer).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
    expect(logoImage).toBeInTheDocument()
    expect(searcherImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimages%2Flogo_ml.png&w=128&q=75',
    )
    expect(logoImage).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimages%2Flogo_ml.png&w=128&q=75',
    )
  })

  it('dispatches actions on search button click', async () => {
    const { container } = render(
      <Provider store={store}>
        <HeaderSearcher
          priceRangeformRef={{ current: null }}
          setPriceRangeSubmit={() => {}}
        />
      </Provider>,
    )

    const searchInput = screen.getByRole('textbox')
    const searchButton = screen.getByRole('button')

    // Mock necessary actions
    const mockDispatch = jest.fn()
    jest.spyOn(store, 'dispatch').mockImplementation(mockDispatch)

    // user input
    fireEvent.change(searchInput, { target: { value: 'camisas' } })

    // button click
    fireEvent.click(searchButton)

    mockDispatch({
      type: GET_SEARCH_INPUT_VALUE,
      payload: 'camisas',
    })

    mockDispatch({
      type: GET_SORT_OPTION,
      payload: { id: 1, description: 'Más relevantes', value: 'relevance' },
    })

    mockDispatch({
      type: GET_PRICE_RANGE_VALUE,
      payload: '*-*',
    })

    // expect dispatchers to have been called
    expect(mockDispatch).toHaveBeenCalledWith({
      type: GET_SEARCH_INPUT_VALUE,
      payload: 'camisas',
    })
    expect(mockDispatch).toHaveBeenCalledWith({
      type: GET_SORT_OPTION,
      payload: { id: 1, description: 'Más relevantes', value: 'relevance' },
    })
    expect(mockDispatch).toHaveBeenCalledWith({
      type: GET_PRICE_RANGE_VALUE,
      payload: '*-*',
    })

    // expect empty form
    const form = container.querySelector('form')
    expect(form).toHaveFormValues({})
  })
})
