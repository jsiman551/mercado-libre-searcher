/* Constants For Styling UI */
import { createGlobalStyle, css } from 'styled-components'

/********Global Styles**********/
export const GlobalStyles = createGlobalStyle`
  ${css`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      background-color: #eeeeee;
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
