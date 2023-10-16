import { render } from '@testing-library/react'
import EmptyState from '@/components/empty-state'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

it('renders EmptyState component', () => {
  const { container } = render(
    <Provider store={store}>
      <EmptyState />
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
