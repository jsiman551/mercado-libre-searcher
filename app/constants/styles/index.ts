/* Constants For Styling UI */
import { createGlobalStyle } from 'styled-components'

/********Global Styles**********/
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: #eeeeee;
    font-family: "Roboto";
  }
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
