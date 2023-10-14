import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceRangeState {
  value: string;
}

const initialState: PriceRangeState = {
  value: "",
};

const priceRangeSlice = createSlice({
  name: "priceRange",
  initialState,
  reducers: {
    getPriceRangeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { getPriceRangeValue } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;
