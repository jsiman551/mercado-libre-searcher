import React, { 
    useContext,
    useEffect,
    useState,
    useRef,
} from 'react';
import {
    PriceFilterContainer,
    PriceFilterInputContainer,
    PriceFilterLabel,
    PriceFilterListContainer,
    PriceFilterRangeButton,
    PriceFilterRangeElement,
    PriceFilterRangeForm,
    PriceFilterRangeInput,
    PriceFilterRangeLink,
    PriceFilterRangeLinkName,
    PriceFilterRangeLinkQuantity,
} from '@/constants/styles';
import { ApiContext } from '@/pages';
import { filterElementType } from '@/constants/types';
import { setSearchDataResult } from '@/api';
import Image from 'next/image';

const PriceFilter = () => {
    const [ isActiveSubmit, setIsActiveSubmit ] = useState<boolean>(false)
    const minimumInputRef = useRef<HTMLInputElement>(null)
    const maximumInputRef = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const contextValue = useContext(ApiContext);
    const {
      priceFilters,
      searchInputRef,
      sortOption,
      priceFilterRange,
      isSidebarOpen,
      setIsSidebarOpen,
      setSearchResultData,
      setPriceFilters,
      setPriceFilterRange,
    } = contextValue;
    const { value: sortDescription } = sortOption;
    const inputValue = searchInputRef.current?.value || "";

    /* set price filter */
    useEffect(() => {
        const setPriceFilter = async () => {
            if (priceFilterRange) {
                const searchData = await setSearchDataResult(
                    inputValue,
                    sortDescription,
                    priceFilterRange,
                )
                if (searchData) {
                    setSearchResultData(searchData.responseData)
                    setPriceFilters(searchData.priceFiltersData)
                }
            }
        }
        setPriceFilter()
    }, [ priceFilterRange ])

    /* set submit button to true */
    const onChangeSubmit = () => {
        const minimum = minimumInputRef.current?.value;
        const maximum = maximumInputRef.current?.value;
        if(minimum || maximum) {
            setIsActiveSubmit(true);
        } else {
            setIsActiveSubmit(false);
        }
    }

    return (
        <PriceFilterContainer>
            <PriceFilterLabel>
                Precio
            </PriceFilterLabel>
            <PriceFilterListContainer>
                {priceFilters?.map((filterElement: filterElementType, index: number) => {
                    const { name, results, id } = filterElement;
                    return(
                        <PriceFilterRangeElement key={index}>
                            <PriceFilterRangeLink onClick={() => {
                                /* lets clear inputs */
                                formRef.current?.reset();
                                setIsActiveSubmit(false);
                                /* if sidebar is opened */
                                if(isSidebarOpen) {
                                    setIsSidebarOpen(false)
                                }
                                /* set new range */
                                setPriceFilterRange(id || "");
                                }}>
                                <PriceFilterRangeLinkName>
                                    {name}
                                </PriceFilterRangeLinkName>
                                <PriceFilterRangeLinkQuantity>
                                    ({results})
                                </PriceFilterRangeLinkQuantity>
                            </PriceFilterRangeLink>
                        </PriceFilterRangeElement>
                    )
                })}
                <PriceFilterRangeElement>
                    <PriceFilterRangeForm ref={formRef}>
                        <PriceFilterInputContainer>
                            <PriceFilterRangeInput 
                                ref={minimumInputRef} 
                                placeholder='M&iacute;nimo' 
                                onChange={onChangeSubmit}
                                type='number'
                            />
                        </PriceFilterInputContainer>
                        <PriceFilterInputContainer>
                            <PriceFilterRangeInput 
                                ref={maximumInputRef} 
                                placeholder='M&aacute;ximo'
                                onChange={onChangeSubmit}
                                type='number'
                             />
                        </PriceFilterInputContainer>
                        <PriceFilterInputContainer>
                            <PriceFilterRangeButton 
                                disabled={!isActiveSubmit} 
                                $active={isActiveSubmit} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    const minimum = minimumInputRef.current?.value;
                                    const maximum = maximumInputRef.current?.value;
                                    const priceRange = `${minimum || '*'}-${maximum || '*'}`;
                                    /* if sidebar is opened */
                                    if(isSidebarOpen) {
                                        setIsSidebarOpen(false)
                                    }
                                    setPriceFilterRange(priceRange);
                                }}
                            >
                                <Image
                                    src='/arrow-filter.svg'
                                    alt='submit price filter'
                                    width={20}
                                    height={20}
                                />
                            </PriceFilterRangeButton>
                        </PriceFilterInputContainer>
                    </PriceFilterRangeForm>
                </PriceFilterRangeElement>
            </PriceFilterListContainer>
        </PriceFilterContainer>
    )
}

export default PriceFilter;
