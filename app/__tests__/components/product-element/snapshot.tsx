import { render } from '@testing-library/react'
import ProductElement from '@/components/product-element'

export const mockProps = {
  title: 'Casa En Venta En Ecuestre (new)',
  price: 500,
  address: {
    state_name: 'Bs.As. Costa Atlántica',
    city_name: 'Costa Esmeralda',
  },
  thumbnail: 'http://http2.mlstatic.com/D_934244-MLA72205123280_102023-I.jpg',
  shipping: {
    free_shipping: false,
  },
  condition: 'New',
  permalink:
    'https://casa.mercadolibre.com.ar/MLA-1537731218-casa-en-venta-en-ecuestre-_JM',
}

it('renders Product Element Component', () => {
  const { container } = render(<ProductElement {...mockProps} />)
  expect(container).toMatchSnapshot()
})
