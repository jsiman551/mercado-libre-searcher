import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchDataState {
  result: object[] | null
  loading: boolean
  priceFilters: object[]
}

const initialState: SearchDataState = {
  result: null,
  loading: false,
  priceFilters: [],
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
  },
})

export const { getStarted, getResultSuccess, getPriceFiltersSuccess } =
  searchDataSlice.actions
export default searchDataSlice.reducer
