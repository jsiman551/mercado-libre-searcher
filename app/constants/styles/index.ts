/* Constants For Styling UI */
import styled from "styled-components";

/************For Responsive behavior, Let's Create Breakpoints****************/
const size = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
  }

const deviceResolution = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
  };

const { mobile, tablet, desktop } = deviceResolution;

/* Content Container */
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem auto 0 auto;
    padding: 0 1rem 0 1rem;
    @media ${tablet} {
        padding: 0 2rem 0 2rem;
    }
    @media ${desktop} {
        padding: 0;
        max-width: 1050px;
    }
`;

/************Styles For Header Section**************/
/* Header where searcher is */
export const Header = styled.header`
    background: #FEE600;
    display: flex; 
    align-items: center;
    padding: .6rem 1rem .6rem 1rem;
    @media ${tablet} {
        padding: .6rem 2rem .6rem 2rem;
    }
    @media ${desktop} {
        padding: .6rem 0 .6rem 0;
        justify-content: center;
    }
`;

/* Header elements container (form) */
export const HeaderElementsContainer = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    @media ${desktop} {
        max-width: 1000px;
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
    background: white;
    border-radius: 4px;
    margin: 3rem 1rem 0 1rem;
    @media ${tablet} {
        margin: 3rem auto 0 auto;
        max-width: 600px;
    }
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
    margin-top: 1rem;
    margin-bottom: 3rem;
`;

/* product element container */
export const ProductElementContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #F4F4F4;
    padding-top: .5rem;
    padding-bottom: .5rem;
    flex-direction: column;
    &:last-child {
        border-bottom: unset;  
    }
    @media ${tablet} {
        flex-direction: row;
    }
`;

/* product details container */
export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media ${tablet} {
        flex-direction: row;
        align-items: center;
        width: 80%;
    }
`;

/* product image Container */
export const ProductImageContainer = styled.div`
    text-align: center;
    @media ${tablet} {
        text-align: left;
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
    font-size: 1em;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    @media ${desktop} {
        font-size: 1.25em;
    }
`;

/* tag for product Title text */
export const ProductTitleText = styled.h2`
    margin-bottom: 0;
    font-size: 1em;
    margin-top: 14px;
    font-weight: 400;
    @media ${desktop} {
        font-size: 1.25em;
    }
`;

/* tag for product dues text */
export const ProductDuesText = styled.p`
    margin-bottom: 0;
    color: #427D2C;
    font-size: 0.875em;
    @media ${desktop} {
        font-size: 1em;
    }
`;

/* tag for product location text */
export const ProductLocationText = styled.p`
    color: #8B8B8B;
    font-size: .75em;
    margin-top: 2rem;
    @media ${mobile} {
        margin-top: 1rem;
        text-align: center;
    }
    @media ${tablet} {
        margin-top: 2rem;
        text-align: left;
        width: 20%;
    }
`;

/*****Free Shipping Icon Styles******/
export const FreeShippingIconContainer = styled.span`
    background: #2EC866;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-left: 8px;
`;

/**************Sort Selector Styles*****************/
/* Selector Container */
export const SortSelectorContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: end;
    align-items: center;
`;

/* Selector Label */
export const SortSelectorLabel = styled.div`
    margin-right: .40rem;
    font-weight: 500;
    font-size: .875em;  
`;

/* Selector Text */
export const SortSelectorOptionText = styled.div`
    display: flex;
    align-items: center;
    font-size: .875em;
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
    font-size: .875em;
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

/****************Price Filter Styles*********************/
/* Price Filter Container */
export const PriceFilterContainer = styled.div`
    border-collapse: collapse;
    font-size: 1em;
    box-sizing: border-box;
    padding-top: 3rem;
    display: none;
    padding-right: .5rem;
    width: 45%;
    @media ${tablet} {
        display: block;
    }
    @media ${desktop} {
        padding-right: 1rem;
        width: 30%;
    }

`;

/* Price Label */
export const PriceFilterLabel = styled.h3`
    color: #333;
    font-size: 1em;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 8px;
`;

/* Price List Container */
export const PriceFilterListContainer = styled.ul`
    padding: 0;
    margin-top: 0;
`;

/* Price List Element */
export const PriceFilterRangeElement = styled.li`
    border-collapse: collapse;
    box-sizing: border-box;
    list-style: none;
    font-size: .875em;
    margin: 0 0 6px;
    cursor: pointer;
`;

/* Price Link */
export const PriceFilterRangeLink = styled.a`
    border-collapse: collapse;
    font-size: .875em;
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    &:hover span {
        color: #3483fa;
    }
`;

/* Price Link Name */
export const PriceFilterRangeLinkName = styled.span`
    border-collapse: collapse;
    box-sizing: border-box;
    color: #666;
    float: left;
    font-size: .875em;
    margin-left: 0;
`;

/* Price Link Name */
export const PriceFilterRangeLinkQuantity = styled.span`
    border-collapse: collapse;
    box-sizing: border-box;
    color: #999;
    float: left;
    font-size: .875em;
    margin-left: 6px;
`;

/* Price Filter Form */
export const PriceFilterRangeForm = styled.form`
    font-size: 1em;
    line-height: 1.35;
    list-style: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
`;

/* Price Input Container */
export const PriceFilterInputContainer = styled.div`
    font-size: 1em;
    align-items: center;
    display: flex;
    &:first-child {
        &:after {
            color: #999;
            content: "—";
            float: left;
            margin: 0 5px;
            padding: 7px 0;
            font-size: 0.75em;
        }
    }
`;

/* Price Filter Input */
export const PriceFilterRangeInput = styled.input`
    box-sizing: border-box;
    border: 0;
    color: rgba(0,0,0,.9);
    margin: 0;
    padding: .8125em .75em;
    background-color: #fafafa;
    border-radius: .375em;
    font-size: 0.813em;
    height: 25px;
    width: 84px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.25);
    &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px #fff, 0 0 0 3px #2968C8;
    }
`;

/* Price Filter Button */
export const PriceFilterRangeButton = styled.button<{ $active: boolean; }>`
    align-items: center;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 24px;
    margin-left: 8px;
    width: 24px;
    background-color: ${props => props.$active ? "#3483fa" : "#e0e0e0"};;
`;
