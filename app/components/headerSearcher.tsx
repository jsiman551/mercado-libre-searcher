import React, { KeyboardEvent, MouseEvent, useRef } from "react";
import Image from "next/image";
import { 
  Header, 
  HeaderElementsContainer, 
  SearchButton, 
  SearchInput,
} from "@/constants/styles";

const HeaderSearcher = () => {
  /* search input value reference */
  const searchInputRef = useRef<HTMLInputElement>(null)

  const onSearchAction = (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>):void => {
    const inputValue = searchInputRef.current?.value || ""
    /* there must be a value in the search input */
    if(inputValue) {
      /* let typescript knows what event type is dealing with (keyboard or mouse) */
      if ('key' in event) {
        const inputEvent = event as React.KeyboardEvent<HTMLInputElement>;
        const { key } = inputEvent;
        /* search for items only if pressed button was Enter */
        if (key === "Enter") {
          console.log(inputValue)
        }
      } else {
        console.log(inputValue)
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
              onKeyDown={(e) => onSearchAction(e)} 
            />
            <SearchButton 
              onClick={(e) => onSearchAction(e)}
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
