export type contextObjectType = {
    searchResultData: object[] | null,
    loadingState: boolean,
    setSearchResultData: (arg0: object[]) => void,
    setLoadingState: (arg0: boolean) => void,
  };

export type productObjectType = {
    thumbnail?: string,
    title?: string,
    price?: number,
    shipping?: {
      free_shipping: boolean 
    },
    address?: {
      state_name: string
      city_name: string
    },
    condition?: string,
  }
