import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { sortOptionsType } from '@/constants/types'
import useOutsideClick from '@/hooks/useOutsideClick'
import {
  Container,
  SidebarButton,
  FlexBox,
  Label,
  OptionText,
  ArrowIcon,
  ElementContainer,
  ElementOption,
} from './styles'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { RootState } from '@/redux/store'
import { GET_FLAG } from '@/redux/slices/sidebar-flag-slice/types'
import { fetchDataThunk } from '@/redux/slices/search-data-slice/api'

const SortSelector = () => {
  const dispatch = useAppDispatch()
  const inputValue = useAppSelector(
    (state: RootState) => state.searchInput.value,
  )
  const priceFilterRange = useAppSelector(
    (state: RootState) => state.priceRange.value,
  )
  const sortOptionsArr = useAppSelector(
    (state: RootState) => state.searchData.sortOptions,
  )
  const selectedSortOption = useAppSelector(
    (state: RootState) => state.sortOption.value,
  )
  const [isSelectorShown, setIsSelectorShown] = useState<boolean>(false)
  const optionsRef = useRef<HTMLDivElement>(null)
  const { name: sortName } = selectedSortOption

  /* this hook will help on closing the "options container" when user clicks outside it */
  useOutsideClick(optionsRef, () => {
    if (isSelectorShown) {
      setIsSelectorShown(false)
    }
  })

  return (
    <Container data-testid="sortContainer">
      <SidebarButton
        onClick={() => {
          /* set sidebar flag to store */
          dispatch({
            type: GET_FLAG,
            payload: true,
          })
        }}
      >
        <Image
          src={'/icons/burger-icon.svg'}
          alt="open sidebar"
          width={20}
          height={20}
        />
      </SidebarButton>
      <FlexBox ref={optionsRef}>
        <Label>
          <p>Ordenar por</p>
        </Label>
        <OptionText onClick={() => setIsSelectorShown(!isSelectorShown)}>
          <p>{sortName}</p>
          <ArrowIcon
            src="/icons/arrow-selector-icon.svg"
            alt="selector"
            width={16}
            height={16}
            $active={isSelectorShown}
          />
        </OptionText>
        {isSelectorShown ? (
          <ElementContainer>
            {sortOptionsArr.map((option: sortOptionsType, index: number) => {
              const { id, name } = option
              return (
                <ElementOption
                  key={index}
                  $active={selectedSortOption?.id === id}
                  onClick={() => {
                    /* set new sort option */
                    dispatch(
                      fetchDataThunk({
                        question: inputValue,
                        sort: option,
                        priceRange: priceFilterRange,
                      }),
                    )
                    setIsSelectorShown(false)
                  }}
                >
                  {name}
                </ElementOption>
              )
            })}
          </ElementContainer>
        ) : null}
      </FlexBox>
    </Container>
  )
}

export default SortSelector
