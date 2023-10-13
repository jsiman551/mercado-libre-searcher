import React, {
  MouseEvent,
  useContext,
} from "react";
import Image from "next/image";
import { 
  Header, 
  HeaderElementsContainer, 
  SearchButton, 
  SearchInput,
} from "@/constants/styles";
import { setSearchDataResult } from "@/api";
import { ApiContext } from "@/pages";

const HeaderSearcher = () => {
  const contextValue = useContext(ApiContext);
  const {
    setSearchResultData,
    setLoadingState,
    setPriceFilters,
    setSortOption,
    setPriceFilterRange,
    searchInputRef,
  } = contextValue;

  const onSearchAction = async (event: MouseEvent<HTMLButtonElement>):Promise<void> => {
    event.preventDefault();
    const inputValue = searchInputRef.current?.value || ""
    /* there must be a value in the search input */
    if(inputValue) {
        /* activate loading state */
        setLoadingState(true)
        /* Sort Selection back to it's default state */
        setSortOption({
          id: 1,
          description: "Más relevantes",
          value: "relevance",
        })
        /* price filter back to it's default state */
        setPriceFilterRange("")
        /* set data */
        const searchData = await setSearchDataResult(inputValue)
        if (searchData) {
          setSearchResultData(searchData.responseData)
          setPriceFilters(searchData.priceFiltersData)
          /* deactivate loading state */
          setLoadingState(false)
        }
      }
  }

    return (
        <Header>
          <Image 
            src="/logo_ml.png" 
            alt={"logo"} 
            width={55} 
            height={40} 
          />
          <HeaderElementsContainer>
            <SearchInput 
              ref={searchInputRef}
            />
            <SearchButton 
              onClick={(e) => onSearchAction(e)}
              type="submit"
            >
              <Image 
                src="/search-icon.svg" 
                alt={"searcher"} 
                width={20} 
                height={25} 
              />
            </SearchButton>
          </HeaderElementsContainer>
        </Header>
    )
}

export default HeaderSearcher;
