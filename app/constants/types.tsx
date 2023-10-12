import { RefObject } from "react";

type sortOptionsObjectType = {
  id?: number,
  description?: string,
  value?: string,
};

export type contextObjectType = {
    searchResultData: object[] | null,
    loadingState: boolean,
    sortOption: sortOptionsObjectType,
    searchInputRef: RefObject<HTMLInputElement>,
    setSearchResultData: (arg0: object[]) => void,
    setLoadingState: (arg0: boolean) => void,
    setSortOption: (arg0: object) => void,
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

export type sortOptionsType = {
  id?: number,
  description?: string,
  value?: string,
}
