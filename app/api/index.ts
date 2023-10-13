import { ApiUrl } from "@/constants";
import axios from "axios";

/* function to call API and set search data result */
export const setSearchDataResult = async (
  inputValue: string,
  sortDescription: string = "relevance",
  priceFilterRange: string = "",
) => {
  const response = await axios.get(
    `${ApiUrl}?q=${inputValue}&sort=${sortDescription}&price=${priceFilterRange}&limit=10`,
  );
  if (response) {
    const responseData: object[] = response.data.results;
    const priceFiltersData: object[] = response.data.available_filters.find(
      ({ id }: { id: string }) => id === "price",
    )?.values;
    return {
      responseData,
      priceFiltersData,
    };
  }
};
