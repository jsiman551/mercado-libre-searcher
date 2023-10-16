import { render } from '@testing-library/react'
import MobileSidebar from '@/components/mobile-sidebar'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

it('renders MobileSidebar component', () => {
  const { container } = render(
    <Provider store={store}>
      <MobileSidebar
        priceRangeformRef={{ current: null }}
        priceRangeSubmit={false}
        setPriceRangeSubmit={() => {}}
      />
    </Provider>
  )
  expect(container).toMatchSnapshot()
})
