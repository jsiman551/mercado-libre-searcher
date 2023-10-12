import { ApiUrl } from '@/constants';
import axios from 'axios';

/* function to call API and set search data result */
export const setSearchDataResult = async (
    inputValue: String,
    sortDescription: string = "relevance",
) => {
    const response = await axios.get(`${ApiUrl}?q=${inputValue}&sort=${sortDescription}&limit=10`)
    if (response) {
        const responseData = response.data.results
        return responseData;
    }
}
