import Content from '@/components/content'
import { store } from '@/redux/store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

it('renders content component', () => {
  const { container } = render(
    <Provider store={store}>
      <Content />
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
