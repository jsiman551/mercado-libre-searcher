import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import EmptyState from '@/components/empty-state'
import { store } from '@/redux/store'
import {
  GET_RESULT_SUCCESS,
  GET_STARTED,
} from '@/redux/slices/search-data-slice/types'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const initialState = {
  searchData: {
    loading: false,
    result: null,
  },
}
const mockedStore = mockStore(initialState)

describe('EmptyState component', () => {
  it('renders the loading state message', () => {
    store.dispatch({ type: GET_STARTED })
    render(
      <Provider store={store}>
        <EmptyState />
      </Provider>,
    )
    expect(
      screen.getByText('Obteniendo resultados para tu búsqueda...'),
    ).toBeInTheDocument()
  })

  it('renders the no results message', () => {
    store.dispatch({ type: GET_RESULT_SUCCESS, payload: [] })
    render(
      <Provider store={store}>
        <EmptyState />
      </Provider>,
    )
    expect(
      screen.getByText('No hay resultados para tu búsqueda.'),
    ).toBeInTheDocument()
  })

  it('renders the initial message when resultData is null and not in loading state', () => {
    render(
      <Provider store={mockedStore}>
        <EmptyState />
      </Provider>,
    )
    expect(
      screen.getByText(
        'Intenta realizar una búsqueda para visualizar una lista de productos.',
      ),
    ).toBeInTheDocument()
  })

  it('does not render anything when there are results', () => {
    store.dispatch({
      type: GET_RESULT_SUCCESS,
      payload: [{ id: 1, name: 'Product' }],
    })
    render(
      <Provider store={store}>
        <EmptyState />
      </Provider>,
    )
    expect(screen.queryByTestId('emptyResultsContainer')).toBeNull()
  })
})
