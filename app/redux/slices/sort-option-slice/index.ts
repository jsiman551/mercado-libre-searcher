import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sortOptionsType } from '@/constants/types'

interface SearchInputState {
  value: sortOptionsType
}

const initialState: SearchInputState = {
  value: {
    id: '',
    name: 'Selecciona',
  },
}

const sortOptionSlice = createSlice({
  name: 'sortOption',
  initialState,
  reducers: {
    getSortOption: (state, action: PayloadAction<sortOptionsType>) => {
      state.value = action.payload
    },
  },
})

export const { getSortOption } = sortOptionSlice.actions
export default sortOptionSlice.reducer
