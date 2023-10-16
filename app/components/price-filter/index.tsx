import React, { useEffect, useState, useRef, RefObject } from 'react'
import { filterElementType } from '@/constants/types'
import Image from 'next/image'
import {
  Container,
  Label,
  ListContainer,
  RangeElement,
  RangeLink,
  RangeLinkName,
  RangeLinkQuantity,
  RangeForm,
  InputContainer,
  RangeInput,
  RangeButton,
} from './styles'
import { useAppSelector } from '@/hooks/useAppSelector'
import { RootState } from '@/redux/store'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { GET_FLAG } from '@/redux/slices/sidebar-flag-slice/types'
import { GET_PRICE_RANGE_VALUE } from '@/redux/slices/price-range-slice/types'
import { fetchDataThunk } from '@/redux/slices/search-data-slice/api'

interface Props {
  priceRangeformRef: RefObject<HTMLFormElement>
  priceRangeSubmit: boolean
  setPriceRangeSubmit: (arg: boolean) => void
}

const PriceFilter = ({
  priceRangeformRef,
  priceRangeSubmit,
  setPriceRangeSubmit,
}: Props) => {
  const dispatch = useAppDispatch()
  const inputValue = useAppSelector(
    (state: RootState) => state.searchInput.value,
  )
  const priceFilters = useAppSelector(
    (state: RootState) => state.searchData.priceFilters,
  )
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.mobileSidebarFlag.flag,
  )
  const priceFilterRange = useAppSelector(
    (state: RootState) => state.priceRange.value,
  )
  const sortOption = useAppSelector(
    (state: RootState) => state.sortOption.option,
  )
  const [priceRange, setPriceRange] = useState<string>('')
  const minimumInputRef = useRef<HTMLInputElement>(null)
  const maximumInputRef = useRef<HTMLInputElement>(null)
  const { value: sortDescription } = sortOption

  /* set price filter */
  useEffect(() => {
    const setPriceFilter = (): void => {
      if (priceFilterRange) {
        /* fetch Search Data */
        dispatch(
          fetchDataThunk({
            question: inputValue,
            sort: sortDescription,
            priceRange: priceFilterRange,
          }),
        )
      }
    }
    setPriceFilter()
  }, [priceFilterRange])

  /* set submit button to true */
  const onChangeSubmit = (): void => {
    const minimum = minimumInputRef.current?.value
    const maximum = maximumInputRef.current?.value
    const priceRange = `${minimum || '*'}-${maximum || '*'}`
    setPriceRange(priceRange)
    if (minimum || maximum) {
      setPriceRangeSubmit(true)
    } else {
      setPriceRangeSubmit(false)
    }
  }

  return (
    <Container>
      <Label>Precio</Label>
      <ListContainer>
        {priceFilters?.map(
          (filterElement: filterElementType, index: number) => {
            const { name, results, id } = filterElement
            return (
              <RangeElement key={index}>
                <RangeLink
                  onClick={() => {
                    /* lets clear inputs */
                    priceRangeformRef.current?.reset()
                    setPriceRangeSubmit(false)
                    /* if sidebar is opened */
                    if (isSidebarOpen) {
                      /* set sidebar flag to store */
                      dispatch({
                        type: GET_FLAG,
                        payload: false,
                      })
                    }
                    /* price filter range back to it's default state */
                    dispatch({
                      type: GET_PRICE_RANGE_VALUE,
                      payload: id || '',
                    })
                  }}
                >
                  <RangeLinkName>{name}</RangeLinkName>
                  <RangeLinkQuantity>({results})</RangeLinkQuantity>
                </RangeLink>
              </RangeElement>
            )
          },
        )}
        <RangeElement>
          <RangeForm ref={priceRangeformRef}>
            <InputContainer>
              <RangeInput
                ref={minimumInputRef}
                placeholder="M&iacute;nimo"
                onChange={onChangeSubmit}
                type="number"
              />
            </InputContainer>
            <InputContainer>
              <RangeInput
                ref={maximumInputRef}
                placeholder="M&aacute;ximo"
                onChange={onChangeSubmit}
                type="number"
              />
            </InputContainer>
            <InputContainer>
              <RangeButton
                disabled={!priceRangeSubmit}
                $active={priceRangeSubmit}
                onClick={(e) => {
                  e.preventDefault()
                  /* if sidebar is opened */
                  if (isSidebarOpen) {
                    /* set sidebar flag to store */
                    dispatch({
                      type: GET_FLAG,
                      payload: false,
                    })
                  }
                  /* price filter range back to it's default state */
                  dispatch({
                    type: GET_PRICE_RANGE_VALUE,
                    payload: priceRange,
                  })
                }}
              >
                <Image
                  src="/icons/arrow-filter-icon.svg"
                  alt="submit price filter"
                  width={20}
                  height={20}
                />
              </RangeButton>
            </InputContainer>
          </RangeForm>
        </RangeElement>
      </ListContainer>
    </Container>
  )
}

export default PriceFilter
