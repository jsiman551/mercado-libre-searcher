/* constants for styling UI */
import styled from "styled-components";

/************styles for header section**************/
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

/************styles for articles list section**************/
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
    margin-top: 3rem;
    margin-bottom: 3rem;
    @media (max-width: 1279.9px) {
        max-width: 80%;
    }
`;

/* product element container */
export const ProductElementContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #F4F4F4;
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

/*****free shipping icon styles******/
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
