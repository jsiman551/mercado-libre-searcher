import { render } from '@testing-library/react'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import HeaderSearcher from '@/components/header-searcher'

it('renders HeaderSearcher component', () => {
  const { container } = render(
    <Provider store={store}>
      <HeaderSearcher
        priceRangeformRef={{ current: null }}
        setPriceRangeSubmit={() => {}}
      />
    </Provider>,
  )
  expect(container).toMatchSnapshot()
})
