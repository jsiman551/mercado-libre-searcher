import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { SortOptions } from "@/constants";
import { sortOptionsType } from "@/constants/types";
import { setSearchDataResult } from "@/api";
import useOutsideClick from "@/hooks/useOutsideClick";
import MobileSidebar from "../mobile-sidebar";
import {
  Container,
  SidebarButton,
  FlexBox,
  Label,
  OptionText,
  ArrowIcon,
  ElementContainer,
  ElementOption,
} from "./styles";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getStarted } from "@/redux/slices/search-data-slice";
import {
  GET_RESULT_SUCCESS,
  GET_PRICE_FILTERS_SUCCESS,
} from "@/redux/slices/search-data-slice/types";
import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/redux/store";
import { GET_SORT_OPTION } from "@/redux/slices/sort-option-slice/types";
import { GET_FLAG } from "@/redux/slices/sidebar-flag-slice/types";

const SortSelector = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(
    (state: RootState) => state.searchInput.value,
  );
  const priceFilterRange = useAppSelector(
    (state: RootState) => state.priceRange.value,
  );
  const sortOption = useAppSelector(
    (state: RootState) => state.sortOption.option,
  );
  const [isSelectorShown, setIsSelectorShown] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const { description, value: sortDescription } = sortOption;

  /* set new results as soon as there is a new sort option */
  useEffect(() => {
    const setNewSearch = async () => {
      const searchData = await setSearchDataResult(
        inputValue,
        sortDescription,
        priceFilterRange,
      );
      if (searchData) {
        /* get loading flag */
        dispatch(getStarted());
        /* get result data */
        dispatch({
          type: GET_RESULT_SUCCESS,
          payload: searchData.responseData,
        });
        /* get price filters data */
        dispatch({
          type: GET_PRICE_FILTERS_SUCCESS,
          payload: searchData.priceFiltersData,
        });
      }
    };
    setNewSearch();
  }, [sortOption]);

  /* this hook will help on closing the "options container" when user clicks outside it */
  useOutsideClick(optionsRef, () => {
    if (isSelectorShown) {
      setIsSelectorShown(false);
    }
  });

  return (
    <>
      <Container>
        <SidebarButton
          onClick={() => {
            /* set sidebar flag to store */
            dispatch({
              type: GET_FLAG,
              payload: true,
            });
          }}
        >
          <Image
            src={"/icons/burger-icon.svg"}
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
            <p>{description}</p>
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
              {SortOptions.map((option: sortOptionsType, index: number) => {
                const { id, description } = option;
                return (
                  <ElementOption
                    key={index}
                    $active={sortOption?.id === id}
                    onClick={() => {
                      /* set new sort option */
                      dispatch({
                        type: GET_SORT_OPTION,
                        payload: option,
                      });
                      setIsSelectorShown(false);
                    }}
                  >
                    {description}
                  </ElementOption>
                );
              })}
            </ElementContainer>
          ) : null}
        </FlexBox>
      </Container>
      <MobileSidebar />
    </>
  );
};

export default SortSelector;
