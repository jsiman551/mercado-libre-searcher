import { render, screen } from '@testing-library/react'
import TagIcon from '@/components/tag-icon'
import 'jest-styled-components'
import { styleTheme } from '@/constants/styles'
import { ThemeProvider } from 'styled-components'

/* for Free Shipping Icon */
const mockProps = {
  imgUrl: '/icons/truck-icon.svg',
  bgColor: '#2ec866',
  altDescription: 'free shipping',
}

describe('TagIcon', () => {
  it('renders TagIcon component with expected content for Free Shipping Icon', () => {
    render(
      <ThemeProvider theme={styleTheme}>
        <TagIcon {...mockProps} />
      </ThemeProvider>,
    )

    const tagIconContainer = screen.getByTestId('tagIconContainer')
    expect(tagIconContainer).toBeInTheDocument()

    // correct image rendering
    const imageElement = screen.getByAltText(
      mockProps.altDescription,
    ) as HTMLImageElement
    expect(imageElement.src).toContain(mockProps.imgUrl)
    expect(imageElement.alt).toBe(mockProps.altDescription)
    expect(imageElement.width).toBe(12)
    expect(imageElement.height).toBe(12)

    // correct color
    expect(tagIconContainer).toHaveStyleRule(`background: ${mockProps.bgColor}`)
  })
})
