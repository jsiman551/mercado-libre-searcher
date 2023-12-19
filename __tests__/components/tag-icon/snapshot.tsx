import { render } from '@testing-library/react'
import TagIcon from '@/components/tag-icon'
import { styleTheme } from '@/constants/styles'
import { ThemeProvider } from 'styled-components'

/* for Free Shipping Icon */
const mockProps = {
  imgUrl: '/icons/truck-icon.svg',
  bgColor: 'rgb(46, 200, 102)',
  altDescription: 'free shipping',
}

it('renders TagIcon component with expected content for Free Shipping Icon', () => {
  const { container } = render(
    <ThemeProvider theme={styleTheme}>
      <TagIcon {...mockProps} />
    </ThemeProvider>,
  )
  expect(container).toMatchSnapshot()
})
