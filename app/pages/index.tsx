import { createContext, useState } from 'react';
import Head from 'next/head'
import { Roboto } from '@next/font/google'
import HeaderSearcher from '@/components/headerSearcher'
import EmptyState from '@/components/emptyState';
import {
  contextObjectType,
  productObjectType,
} from '@/constants/types';
import { contextMockData } from '@/constants';
import { ProductListContainer } from '@/constants/styles';
import ProductElement from '@/components/productElement';

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

/* create api context */
export const ApiContext = createContext<contextObjectType>(contextMockData);

export default function Home() {
  /* state where result data will be set */
  const [ searchResultData, setSearchResultData ] = useState<object[] | null>(null)
  /* state to handle loading state */
  const [ loadingState, setLoadingState ] = useState<boolean>(false)
  const { Provider } = ApiContext
  
  const contextValues: contextObjectType = {
    searchResultData,
    loadingState,
    setSearchResultData,
    setLoadingState,
  }

  return (
    <>
      <Head>
        <title>Buscador de Productos</title>
        <meta name="description" content="Buscador de Productos de Mercado Libre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" data-head-react="true" href="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg" />
      </Head>
      <Provider value={contextValues}>
        <main className={roboto.className}>
            <HeaderSearcher />
            {searchResultData === null && !loadingState
              ? <EmptyState 
                  message="Intenta realizar una b&uacute;squeda para visualizar una lista de productos." 
                />
              : null
            }
            {searchResultData?.length === 0 && !loadingState
              ? <EmptyState 
                  message="No hay resultados para tu b&uacute;squeda mas reciente." 
                />
              : null
            }
            {loadingState
              ? <EmptyState 
                  message="Obteniendo resultados para tu b&uacute;squeda..." 
                />
              : null
            }
            {searchResultData?.length && !loadingState
              ? <ProductListContainer>
                {searchResultData.map((product: productObjectType, index: number) => {
                  const { 
                    thumbnail,
                    title,
                    price,
                    shipping,
                    address,
                    condition,
                  } = product;
                  return (
                    <ProductElement 
                      thumbnail={thumbnail || ""} 
                      title={title || ""} 
                      price={price || 0} 
                      shipping={shipping || { free_shipping: false }} 
                      address={address || { state_name: "", city_name: "" }}
                      condition={condition || ""}
                      key={index} 
                    />
                  )
                })}
                </ProductListContainer>
              : null
            }
        </main>
      </Provider>
    </>
  )
}
