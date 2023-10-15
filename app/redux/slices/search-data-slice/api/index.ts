// Thunk for fetching data
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrl } from "@/constants";
import { getPriceFiltersSuccess, getResultSuccess, getStarted } from "..";

interface FetchDataParams {
    question: string,
    sort?: string,
    priceRange?: string,
  }

export const fetchDataThunk = createAsyncThunk(
    "searchData/fetchDataThunk",
    async (params: FetchDataParams, { dispatch }) => {
      const { question, sort, priceRange } = params;
      const apiEndpoint = `${ApiUrl}?q=${question}&sort=${sort || "relevance"}&price=${priceRange || "*-*"}&limit=10`;
  
      try {
        /* loading started */
        dispatch(getStarted());

        /* fetch data */
        const response = await axios.get(apiEndpoint);
        const resultData: object[] = response.data.results;
        const priceFiltersData: object[] = response.data.available_filters.find(
          ({ id }: { id: string }) => id === "price",
        )?.values;

        /* save result data */
        dispatch(getResultSuccess(resultData));
        
        /* save price filters data */
        dispatch(getPriceFiltersSuccess(priceFiltersData));
      } catch (error) {
        throw Error("Error fetching data");
      }
    }
  );
