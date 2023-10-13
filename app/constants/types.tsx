/* eslint-disable no-unused-vars */
import { RefObject } from "react";

type sortOptionsObjectType = {
  id?: number;
  description?: string;
  value?: string;
};

export type contextObjectType = {
  searchResultData: object[] | null;
  loadingState: boolean;
  sortOption: sortOptionsObjectType;
  searchInputRef: RefObject<HTMLInputElement>;
  priceFilters: object[] | null;
  priceFilterRange: string;
  isSidebarOpen: boolean;
  setSearchResultData: (arg0: object[]) => void;
  setLoadingState: (arg0: boolean) => void;
  setSortOption: (arg0: object) => void;
  setPriceFilters: (arg0: object[]) => void;
  setPriceFilterRange: (arg0: string) => void;
  setIsSidebarOpen: (arg0: boolean) => void;
};

export type productObjectType = {
  thumbnail?: string;
  title?: string;
  price?: number;
  shipping?: {
    free_shipping: boolean;
  };
  address?: {
    state_name: string;
    city_name: string;
  };
  condition?: string;
  permalink?: string;
};

export type sortOptionsType = {
  id?: number;
  description?: string;
  value?: string;
};

export type filterElementType = {
  id?: string;
  name?: string;
  results?: number;
};
