import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortOptionsType } from "@/constants/types";

interface SearchInputState {
  option: sortOptionsType;
}

const initialState: SearchInputState = {
  option: {
    id: 1,
    description: "Más relevantes",
    value: "relevance",
  },
};

const sortOptionSlice = createSlice({
  name: "sortOption",
  initialState,
  reducers: {
    getSortOption: (state, action: PayloadAction<sortOptionsType>) => {
      state.option = action.payload;
    },
  },
});

export const { getSortOption } = sortOptionSlice.actions;
export default sortOptionSlice.reducer;
