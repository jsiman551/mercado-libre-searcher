/* Constants For Styling UI */
import { createGlobalStyle, css } from 'styled-components'

/***************Define Style Theme***********/
export const styleTheme = {
  color: {
    mainYellow: '#fee600',
    white: '#ffffff',
    black: '#000000',
    gray: '#d8d8d8',
    mediumGray: '#999',
    charcoalGray: '#333',
    silverGray: '#eeeeee',
    platinumGray: '#e0e0e0',
    warmGray: '#8b8b8b',
    lightSilverGray: '#f4f4f4',
    lightGray: '#fafafa',
    dimGray: '#666',
    dodgerBlue: '#3483fa',
    skyBlue: '#9cc4db',
    deepBlue: '#2968c8',
    mediumGreen: '#2ec866',
    forestGreen: '#427d2c',
  },
  fontSize: {
    small: '0.75em',
    slightlySmaller: '0.813',
    regular: '0.875em',
    normal: '1em',
    large: '1.25em',
  },
}

/********Global Styles**********/
export const GlobalStyles = createGlobalStyle`
  ${css`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      background-color: ${(props) => props.theme.color.silverGray};
    }
  `}
`

/************ Breakpoints ****************/
const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
}

const deviceResolution = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
}

export const { mobile, tablet, desktop } = deviceResolution
/********************************************/
