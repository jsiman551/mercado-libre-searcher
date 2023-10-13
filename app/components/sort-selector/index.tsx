import React, {
    useContext,
    useEffect,
    useState,
    useRef,
} from 'react';
import Image from "next/image";
import { SortOptions } from '@/constants';
import { sortOptionsType } from '@/constants/types';
import { ApiContext } from '@/pages';
import { setSearchDataResult } from '@/api';
import useOutsideClick from '@/hooks/useOutsideClick';
import MobileSidebar from '../mobile-sidebar';
import { 
    Container, 
    SidebarButton, 
    FlexBox, 
    Label, 
    OptionText, 
    ArrowIcon, 
    ElementContainer, 
    ElementOption,
} from './styles';

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
            <Container>
                <SidebarButton
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <Image
                        src={'/icons/burger-icon.svg'}
                        alt='open sidebar'
                        width={20}
                        height={20}
                    />
                </SidebarButton>
                <FlexBox ref={optionsRef}>
                    <Label>
                        <p>
                            Ordenar por
                        </p>
                    </Label>
                    <OptionText 
                        onClick={() => setIsSelectorShown(!isSelectorShown)}
                    >
                        <p>
                            {description}
                        </p>
                        <ArrowIcon 
                            src='/icons/arrow-selector-icon.svg'
                            alt='selector'
                            width={16}
                            height={16}
                            $active={isSelectorShown}
                        />
                    </OptionText>
                    {isSelectorShown ? <ElementContainer>
                        {SortOptions.map((option: sortOptionsType, index: number) => {
                            const { id, description } = option;
                            return (
                                <ElementOption
                                    key={index}
                                    $active={sortOption?.id === id}
                                    onClick={() => {
                                        setSortOption(option)
                                        setIsSelectorShown(false)
                                    }}
                                >
                                    {description}
                                </ElementOption>
                            )
                        })}
                    </ElementContainer> : null}
                </FlexBox>
            </Container>
            {isSidebarOpen ? <MobileSidebar /> : null}
        </>
    )
}

export default SortSelector;
