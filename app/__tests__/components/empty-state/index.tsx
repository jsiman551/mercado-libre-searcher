import { render, screen } from '@testing-library/react'
import EmptyState from '@/components/empty-state'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

describe('EmptyState', () => {
  it('renders EmptyState component', () => {
    render(
      <Provider store={store}>
        <EmptyState />
      </Provider>,
    )

    const emptyResultsContainer = screen.getByTestId('emptyResultsContainer')
    expect(emptyResultsContainer).toBeInTheDocument()
  })
})
