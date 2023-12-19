import { configureStore } from '@reduxjs/toolkit'
import searchDataReducer from './slices/search-data-slice'
import searchInputReducer from './slices/search-input-slice'
import sortOptionReducer from './slices/sort-option-slice'
import sidebarFlagReducer from './slices/sidebar-flag-slice'
import priceRangeReducer from './slices/price-range-slice'

export const store = configureStore({
  reducer: {
    searchData: searchDataReducer,
    searchInput: searchInputReducer,
    sortOption: sortOptionReducer,
    mobileSidebarFlag: sidebarFlagReducer,
    priceRange: priceRangeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
