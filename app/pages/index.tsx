import { createContext, useRef, useState } from "react";
import Head from "next/head";
import { Roboto } from "@next/font/google";
import HeaderSearcher from "@/components/header-searcher";
import EmptyState from "@/components/empty-state";
import {
  contextObjectType,
  productObjectType,
  sortOptionsType,
} from "@/constants/types";
import { contextMockData } from "@/constants";
import { ContentContainer, OnlyLongResolutions } from "@/constants/styles";
import ProductElement from "@/components/product-element";
import SortSelector from "@/components/sort-selector";
import PriceFilter from "@/components/price-filter";
import { ProductListContainer } from "@/components/product-element/styles";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

/* create api context */
export const ApiContext = createContext<contextObjectType>(contextMockData);

export default function Home() {
  /* state where result data will be set */
  const [searchResultData, setSearchResultData] = useState<object[] | null>(
    null,
  );
  /* state where price filters data will be set */
  const [priceFilters, setPriceFilters] = useState<object[] | null>(null);
  /* state to handle loading state */
  const [loadingState, setLoadingState] = useState<boolean>(false);
  /* search input value reference */
  const searchInputRef = useRef<HTMLInputElement>(null);
  /* state to handle price filter range */
  const [priceFilterRange, setPriceFilterRange] = useState<string>("");
  /* state to handle sort option selection */
  const [sortOption, setSortOption] = useState<sortOptionsType>({
    id: 1,
    description: "Más relevantes",
    value: "relevance",
  });
  /* it helps to open/close mobile sidebar */
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { Provider } = ApiContext;

  const contextValues: contextObjectType = {
    searchResultData,
    loadingState,
    sortOption,
    searchInputRef,
    priceFilters,
    priceFilterRange,
    isSidebarOpen,
    setSearchResultData,
    setLoadingState,
    setSortOption,
    setPriceFilters,
    setPriceFilterRange,
    setIsSidebarOpen,
  };

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
      <Provider value={contextValues}>
        <main className={roboto.className}>
          <HeaderSearcher />
          {searchResultData === null && !loadingState ? (
            <EmptyState message="Intenta realizar una b&uacute;squeda para visualizar una lista de productos." />
          ) : null}
          {searchResultData?.length === 0 && !loadingState ? (
            <EmptyState message="No hay resultados para tu b&uacute;squeda." />
          ) : null}
          {loadingState ? (
            <EmptyState message="Obteniendo resultados para tu b&uacute;squeda..." />
          ) : null}
          {searchResultData?.length && !loadingState ? (
            <ContentContainer>
              <OnlyLongResolutions>
                <PriceFilter />
              </OnlyLongResolutions>
              <div>
                <SortSelector />
                <ProductListContainer>
                  {searchResultData.map(
                    (product: productObjectType, index: number) => {
                      const {
                        thumbnail,
                        title,
                        price,
                        shipping,
                        address,
                        condition,
                        permalink,
                      } = product;
                      return (
                        <ProductElement
                          thumbnail={thumbnail || ""}
                          title={title || ""}
                          price={price || 0}
                          shipping={shipping || { free_shipping: false }}
                          address={address || { state_name: "", city_name: "" }}
                          condition={condition || ""}
                          permalink={permalink || ""}
                          key={index}
                        />
                      );
                    },
                  )}
                </ProductListContainer>
              </div>
            </ContentContainer>
          ) : null}
        </main>
      </Provider>
    </>
  );
}
