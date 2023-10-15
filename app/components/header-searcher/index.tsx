import React, { MouseEvent, RefObject, useRef } from 'react'
import Image from 'next/image'
import { Header, SearchInput, SearchButton, ElementsContainer } from './styles'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { GET_SEARCH_INPUT_VALUE } from '@/redux/slices/search-input-slice/types'
import { GET_SORT_OPTION } from '@/redux/slices/sort-option-slice/types'
import { GET_PRICE_RANGE_VALUE } from '@/redux/slices/price-range-slice/types'
import { fetchDataThunk } from '@/redux/slices/search-data-slice/api'

interface Props {
  priceRangeformRef: RefObject<HTMLFormElement>
  setPriceRangeSubmit: (arg: boolean) => void
}

const HeaderSearcher = ({ priceRangeformRef, setPriceRangeSubmit }: Props) => {
  /* search input value reference */
  const searchInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const onSearchAction = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    event.preventDefault()
    const inputValue = searchInputRef.current?.value || ''
    /* there must be a value in the search input */
    if (inputValue) {
      /* Sort Selection back to it's default state */
      dispatch({
        type: GET_SORT_OPTION,
        payload: { id: 1, description: 'Más relevantes', value: 'relevance' },
      })
      /* price filter range back to it's default state */
      dispatch({
        type: GET_PRICE_RANGE_VALUE,
        payload: '',
      })
      /* set input value to store */
      dispatch({
        type: GET_SEARCH_INPUT_VALUE,
        payload: inputValue,
      })
      /* fetch Search Data */
      dispatch(
        fetchDataThunk({
          question: inputValue,
        }),
      )
      /* clear price range form */
      priceRangeformRef.current?.reset()
      setPriceRangeSubmit(false)
    }
  }

  return (
    <Header>
      <Image src="/images/logo_ml.png" alt={'logo'} width={55} height={40} />
      <ElementsContainer>
        <SearchInput ref={searchInputRef} />
        <SearchButton onClick={(e) => onSearchAction(e)} type="submit">
          <Image
            src="/icons/search-icon.svg"
            alt={'searcher'}
            width={20}
            height={25}
          />
        </SearchButton>
      </ElementsContainer>
    </Header>
  )
}

export default HeaderSearcher
