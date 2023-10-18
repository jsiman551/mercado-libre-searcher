import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchDataState {
  result: object[] | null
  loading: boolean
  priceFilters: object[]
  sortOptions: object[]
}

const initialState: SearchDataState = {
  result: null,
  loading: false,
  priceFilters: [],
  sortOptions: [],
}

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState,
  reducers: {
    getStarted: (state) => {
      state.loading = true
    },
    getResultSuccess: (state, action: PayloadAction<object[]>) => {
      state.loading = false
      state.result = action.payload
    },
    getPriceFiltersSuccess: (state, action: PayloadAction<object[]>) => {
      state.loading = false
      state.priceFilters = action.payload
    },
    getSortOptionsSuccess: (state, action: PayloadAction<object[]>) => {
      state.loading = false
      state.sortOptions = action.payload
    },
  },
})

export const {
  getStarted,
  getResultSuccess,
  getPriceFiltersSuccess,
  getSortOptionsSuccess,
} = searchDataSlice.actions
export default searchDataSlice.reducer
