import React, {
  MouseEvent,
  useContext,
  useRef,
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
  /* search input value reference */
  const searchInputRef = useRef<HTMLInputElement>(null);
  const contextValue = useContext(ApiContext);
  const {
    setSearchResultData,
    setLoadingState,
  } = contextValue;

  const onSearchAction = async (event: MouseEvent<HTMLButtonElement>):Promise<void> => {
    event.preventDefault();
    const inputValue = searchInputRef.current?.value || ""
    /* there must be a value in the search input */
    if(inputValue) {
        /* activate loading state */
        setLoadingState(true)
        const searchData = await setSearchDataResult(inputValue)
        if (searchData) {
          setSearchResultData(searchData)
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
