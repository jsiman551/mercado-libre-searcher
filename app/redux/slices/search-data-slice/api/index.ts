// Thunk for fetching data
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApiUrl } from '@/constants'
import { getPriceFiltersSuccess, getResultSuccess, getSortOptionsSuccess, getStarted } from '..'
import { GET_SORT_OPTION } from '../../sort-option-slice/types'
import { sortOptionsType } from '@/constants/types'

interface FetchDataParams {
  question: string
  sort?: sortOptionsType
  priceRange?: string
}

export const fetchDataThunk = createAsyncThunk(
  'searchData/fetchDataThunk',
  async (params: FetchDataParams, { dispatch }) => {
    const { question, sort, priceRange } = params
    const apiEndpoint = `${ApiUrl}?q=${question}&sort=${
      sort?.id || ""
    }&price=${priceRange || '*-*'}&limit=10`

    try {
      /* loading started */
      dispatch(getStarted())

      /* fetch data */
      const response = await axios.get(apiEndpoint)
      const resultData: object[] = response.data.results
      const priceFiltersData: object[] = response.data.available_filters.find(
        ({ id }: { id: string }) => id === 'price',
      )?.values
      const sortOptionsData: object[] = response.data.available_sorts

      /* save result data */
      dispatch(getResultSuccess(resultData))

      /* save price filters data */
      dispatch(getPriceFiltersSuccess(priceFiltersData))

      /* save sort options */
      dispatch(getSortOptionsSuccess(sortOptionsData))

      if(sort) {
        /* if there is sort, set sort options */
        dispatch({
          type: GET_SORT_OPTION,
          payload: {
            id: sort.id,
            name: sort.name
          },
        })
      } else {
        /* otherwise, set default state */
        dispatch({
          type: GET_SORT_OPTION,
          payload: {
            id: "",
            name: "Selecciona"
          },
        })
      }
    } catch (error) {
      throw Error('Error fetching data')
    }
  },
)
