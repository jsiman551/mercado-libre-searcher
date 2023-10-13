import React, { 
    useContext,
    useEffect,
    useState,
    useRef,
} from 'react';
import { ApiContext } from '@/pages';
import { filterElementType } from '@/constants/types';
import { setSearchDataResult } from '@/api';
import Image from 'next/image';
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
} from './styles';

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
        <Container>
            <Label>
                Precio
            </Label>
            <ListContainer>
                {priceFilters?.map((filterElement: filterElementType, index: number) => {
                    const { name, results, id } = filterElement;
                    return(
                        <RangeElement key={index}>
                            <RangeLink onClick={() => {
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
                                <RangeLinkName>
                                    {name}
                                </RangeLinkName>
                                <RangeLinkQuantity>
                                    ({results})
                                </RangeLinkQuantity>
                            </RangeLink>
                        </RangeElement>
                    )
                })}
                <RangeElement>
                    <RangeForm ref={formRef}>
                        <InputContainer>
                            <RangeInput 
                                ref={minimumInputRef} 
                                placeholder='M&iacute;nimo' 
                                onChange={onChangeSubmit}
                                type='number'
                            />
                        </InputContainer>
                        <InputContainer>
                            <RangeInput 
                                ref={maximumInputRef} 
                                placeholder='M&aacute;ximo'
                                onChange={onChangeSubmit}
                                type='number'
                             />
                        </InputContainer>
                        <InputContainer>
                            <RangeButton 
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
                                    src='/icons/arrow-filter-icon.svg'
                                    alt='submit price filter'
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

export default PriceFilter;
