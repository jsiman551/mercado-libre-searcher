import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchInputState {
  value: string
}

const initialState: SearchInputState = {
  value: '',
}

const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState,
  reducers: {
    getSearchInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { getSearchInputValue } = searchInputSlice.actions
export default searchInputSlice.reducer
