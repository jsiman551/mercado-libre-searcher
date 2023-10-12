import React, {
    useContext,
    useEffect,
    useState,
} from 'react';
import {
    SortSelectorArrowIcon,
    SortSelectorContainer,
    SortSelectorElementContainer,
    SortSelectorElementOption,
    SortSelectorLabel,
    SortSelectorOptionText,
} from '@/constants/styles';
import { SortOptions } from '@/constants';
import { sortOptionsType } from '@/constants/types';
import { ApiContext } from '@/pages';
import { setSearchDataResult } from '@/api';

const SortSelector = () => {
    const [ isSelectorShown, setIsSelectorShown ] = useState<boolean>(false);
    const {
        sortOption,
        searchInputRef,
        setSortOption,
        setSearchResultData,
    } = useContext(ApiContext)
    const { description, value: sortDescription } = sortOption
    const inputValue = searchInputRef.current?.value || ""

    /* set new results as soon as there is a new sort option */
    useEffect(() => {
        const setNewSearch = async () => {
            const searchData = await setSearchDataResult(inputValue, sortDescription)
            if (searchData) {
                setSearchResultData(searchData)
            }
        }
        setNewSearch()
    }, [ sortOption ])

    return (
        <SortSelectorContainer>
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
        </SortSelectorContainer>
    )
}

export default SortSelector;
