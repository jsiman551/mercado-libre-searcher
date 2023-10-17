import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Content from '@/components/content'

export default function Home() {
  return (
    <>
      <Head>
        <title>Buscador de Productos</title>
        <meta
          name="description"
          content="Buscador de Productos de Mercado Libre"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          data-head-react="true"
          href="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg"
        />
      </Head>
      <Provider store={store}>
        <main data-testid="mainContainer">
          <Content />
        </main>
      </Provider>
    </>
  )
}
