import React, {
    useContext,
    useEffect,
    useState,
    useRef,
} from 'react';
import Image from "next/image";
import {
    SidebarButton,
    SortSelectorArrowIcon,
    SortSelectorContainer,
    SortSelectorElementContainer,
    SortSelectorElementOption,
    SortSelectorFlexBox,
    SortSelectorLabel,
    SortSelectorOptionText,
} from '@/constants/styles';
import { SortOptions } from '@/constants';
import { sortOptionsType } from '@/constants/types';
import { ApiContext } from '@/pages';
import { setSearchDataResult } from '@/api';
import useOutsideClick from '@/hooks/useOutsideClick';
import MobileSidebar from './mobileSidebar';

const SortSelector = () => {
    const [ isSelectorShown, setIsSelectorShown ] = useState<boolean>(false);
    const optionsRef = useRef<HTMLDivElement>(null);
    const {
        sortOption,
        searchInputRef,
        priceFilterRange,
        isSidebarOpen,
        setSortOption,
        setPriceFilters,
        setSearchResultData,
        setIsSidebarOpen,
    } = useContext(ApiContext)
    const { description, value: sortDescription } = sortOption
    const inputValue = searchInputRef.current?.value || ""

    /* set new results as soon as there is a new sort option */
    useEffect(() => {
        const setNewSearch = async () => {
            const searchData = await setSearchDataResult(inputValue, sortDescription, priceFilterRange)
            if (searchData) {
                setSearchResultData(searchData.responseData)
                setPriceFilters(searchData.priceFiltersData)
            }
        }
        setNewSearch()
    }, [ sortOption ])

    /* this hook will help on closing the "options container" when user clicks outside it */
    useOutsideClick(optionsRef, () => {
        if(isSelectorShown) {
            setIsSelectorShown(false)
        }
    });

    return (
        <>
            <SortSelectorContainer>
                <SidebarButton
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <Image
                        src={'/burger-icon.svg'}
                        alt='open sidebar'
                        width={20}
                        height={20}
                    />
                </SidebarButton>
                <SortSelectorFlexBox ref={optionsRef}>
                    <SortSelectorLabel>
                        <p>
                            Ordenar por
                        </p>
                    </SortSelectorLabel>
                    <SortSelectorOptionText 
                        onClick={() => setIsSelectorShown(!isSelectorShown)}
                    >
                        <p>
                            {description}
                        </p>
                        <SortSelectorArrowIcon 
                            src='/arrow-selector.svg'
                            alt='selector'
                            width={16}
                            height={16}
                            $active={isSelectorShown}
                        />
                    </SortSelectorOptionText>
                    {isSelectorShown ? <SortSelectorElementContainer>
                        {SortOptions.map((option: sortOptionsType, index: number) => {
                            const { id, description } = option;
                            return (
                                <SortSelectorElementOption
                                    key={index}
                                    $active={sortOption?.id === id}
                                    onClick={() => {
                                        setSortOption(option)
                                        setIsSelectorShown(false)
                                    }}
                                >
                                    {description}
                                </SortSelectorElementOption>
                            )
                        })}
                    </SortSelectorElementContainer> : null}
                </SortSelectorFlexBox>
            </SortSelectorContainer>
            {isSidebarOpen ? <MobileSidebar /> : null}
        </>
    )
}

export default SortSelector;
