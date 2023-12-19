import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarFlagState {
  flag: boolean
}

const initialState: SidebarFlagState = {
  flag: false,
}

const sidebarFlagSlice = createSlice({
  name: 'sidebarFlag',
  initialState,
  reducers: {
    getFlag: (state, action: PayloadAction<boolean>) => {
      state.flag = action.payload
    },
  },
})

export const { getFlag } = sidebarFlagSlice.actions
export default sidebarFlagSlice.reducer
