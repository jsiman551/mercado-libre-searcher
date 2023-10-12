/* Constants For Styling UI */
import styled from "styled-components";

/************Styles For Header Section**************/
/* Header where searcher is */
export const Header = styled.header`
  background: #FEE600;
  display: flex;
  justify-content: center;
  padding: 0.6rem;
  align-items: center;
  @media (max-width: 767.9px) {
    justify-content: space-around;
  }
`;

/* Header elements container (form) */
export const HeaderElementsContainer = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 60%;
    @media (max-width: 767.9px) {
        max-width: 70%;
    }
`;

/* input to search for items */
export const SearchInput = styled.input`
    height: 40px;
    color: #333;
    padding: 0px 60px 0px 15px;
    border-radius: 4px;
    border-color: rgba(0,0,0,0);
    margin-left: 1.5rem;
    width: 100%;
    &:focus {
        outline: none;
    }
    @media (max-width: 767.9px) {
        margin-left: 0;
    }
`;

/* button to submit search info */
export const SearchButton = styled.button`
    height: 43px;
    min-width: 50px;
    margin-left: -50px;
    background: #EEEEEE;
    border: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-top: 4px;
    cursor: pointer;
`;

/************Styles For Articles List Section**************/
/* container for empty results */
export const EmptyResultsContainer = styled.div`
    padding: 2rem;
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    background: white;
    border-radius: 4px;
`;

/* message for empty results */
export const EmptyResultsText = styled.p`
    text-align: center;
`;

/* product list container */
export const ProductListContainer = styled.div`
    background: white;
    padding: 1rem;
    border-radius: 4px;
    max-width: 61%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    margin-bottom: 3rem;
    @media (max-width: 1279.9px) {
        max-width: 80%;
    }
`;

/* product element container */
export const ProductElementContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #F4F4F4;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    &:last-child {
        border-bottom: unset;  
    }
    @media (max-width: 767.9px) {
        flex-direction: column;
    }
`;

/* product details container */
export const DetailsContainer = styled.div`
    display: flex;
    @media (max-width: 767.9px) {
        flex-direction: column;
        align-items: center;
    }
`;

/* product image */
export const ProductImage = styled.img`
    border-radius: 4px;
    object-fit: contain;
`;

/* product text details container */
export const TextsDetailsContainer = styled.div`
    margin-left: 1rem;
`;

/* tag for product price text */
export const ProductPriceText = styled.p`
    color: #333;
    font-size: 1.5em;
    margin-bottom: 0;
    display: flex;
    align-items: center;
`;

/* tag for product Title text */
export const ProductTitleText = styled.p`
    margin-bottom: 0;
    font-size: 1.25em;
    margin-top: 14px;
`;

/* tag for product dues text */
export const ProductDuesText = styled.p`
    margin-bottom: 0;
    color: #427D2C;
`;

/* tag for product location text */
export const ProductLocationText = styled.p`
    color: #8B8B8B;
    font-size: 0.75em;
    margin-top: 2rem;
    @media (max-width: 767.9px) {
        margin-top: 1rem;
        text-align: center;
    }
`;

/*****Free Shipping Icon Styles******/
export const FreeShippingIconContainer = styled.span`
    background: #2EC866;
    border-radius: 50%;
    display: inline-block; 
    width: 20px;
    height: 20px;
    margin-left: 8px;
`;

export const FreeShippingIcon = styled.img`
    margin-left: 4px;
    margin-bottom: 7px;
`;

/**************Sort Selector Styles*****************/
/* Selector Container */
export const SortSelectorContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    max-width: 61%;
    margin-left: auto;
    margin-right: auto;
    justify-content: end;
    align-items: center;
    @media (max-width: 1279px) {
        max-width: 80%;
    }
`;

/* Selector Label */
export const SortSelectorLabel = styled.div`
    margin-right: 0.40rem;
    font-weight: 500;
    font-size: 0.875em;  
`;

/* Selector Text */
export const SortSelectorOptionText = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.875em;
    cursor: pointer;
    &:hover {
        color: #3483fa;
    }
`;

/* Selector Arrow Icon */
export const SortSelectorArrowIcon = styled.img<{ $active: boolean; }>`
    transform: ${props => props.$active ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform .2s ease-out;
    margin-top: 3px;
    margin-left: 2px;
`;

/* Selector Elements Container */
export const SortSelectorElementContainer = styled.ul`
    border-collapse: collapse;
    box-sizing: border-box;
    border-radius: .375em;
    position: absolute;
    top: 101px;
    background-color: #fff;
    padding: 0;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.12);
    font-size: 0.875em;
    max-width: 135px;
`;

/* Selector Elements Option */
export const SortSelectorElementOption = styled.li<{ $active: boolean; }>`
    border-collapse: collapse;
    color:  ${props => props.$active ? "#3483fa" : "#666"};
    box-sizing: border-box;
    cursor: pointer;
    align-items: center;
    display: flex;
    height: 41px;
    border-bottom: 1px solid #d8d8d8;
    padding: 1rem;
    font-weight: ${props => props.$active ? "500" : "400"};
    &:before {
        background: ${props => props.$active ? "#3483fa" : ""};
        content: "";
        position: absolute;
        width: 5px;
        height: 41px;
        left: 0;
    }
    &:hover {
        &:after {
            background: ${props => props.$active ? "#3483fa" : "#9cc4db"};
            content: "";
            left: 0;
            position: absolute;
            width: 5px;
            height: 41px;
        }
        background-color: rgba(0,0,0,.04);
        transition: background-color .1s ease-out;
    }
    &:first-child {
        border-top-left-radius: .375em;
        border-top-right-radius: .375em;
        &:after {
            border-top-left-radius: .375em;
        }
        &:before {
            border-top-left-radius: .375em;
        }
    }
    &:last-child {
        border: 0;
        &:after {
            border-bottom-left-radius: .375em;
        }
        &:before {
            border-bottom-left-radius: .375em;
        }
    }
`;
