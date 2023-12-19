import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react';
import { GlobalStyles, styleTheme } from '@/constants/styles'
import { store } from '@/redux/store'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={styleTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </Provider>
  )
}
