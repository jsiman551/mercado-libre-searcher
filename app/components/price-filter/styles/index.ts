import { styled } from "styled-components";
import { desktop, tablet } from "@/constants/styles";

/****************Price Filter Styles*********************/
/* Price Filter Container */
export const Container = styled.div`
    font-size: 1em;
    box-sizing: border-box;
    padding-right: .5rem;
    border-bottom: 1px solid rgba(0,0,0,.25);
    width: 80%;
    margin: 2rem 0 0 1rem;
    @media ${tablet} {
        border: 0;
        margin-left: 0;
        width: 45%;
        padding-top: 3rem;
    }
    @media ${desktop} {
        width: 30%;
    }
`;

/* Price Label */
export const Label = styled.h3`
    color: #333;
    font-size: 1em;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 8px;
`;

/* Price List Container */
export const ListContainer = styled.ul`
    padding: 0;
    margin-top: 0;
`;

/* Price List Element */
export const RangeElement = styled.li`
    border-collapse: collapse;
    box-sizing: border-box;
    list-style: none;
    font-size: .875em;
    margin: 0 0 6px;
    cursor: pointer;
`;

/* Price Link */
export const RangeLink = styled.a`
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
export const RangeLinkName = styled.span`
    border-collapse: collapse;
    box-sizing: border-box;
    color: #666;
    float: left;
    font-size: .875em;
    margin-left: 0;
`;

/* Price Link Quantity */
export const RangeLinkQuantity = styled.span`
    border-collapse: collapse;
    box-sizing: border-box;
    color: #999;
    float: left;
    font-size: .875em;
    margin-left: 6px;
`;

/* Price Filter Form */
export const RangeForm = styled.form`
    font-size: 1em;
    line-height: 1.35;
    list-style: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
`;

/* Price Input Container */
export const InputContainer = styled.div`
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
export const RangeInput = styled.input`
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
export const RangeButton = styled.button<{ $active: boolean; }>`
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
