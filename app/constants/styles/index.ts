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
    margin-top: 4rem;
    background: white;
    border-radius: 4px;
`;

/* message for empty results */
export const EmptyResultsText = styled.p`
    text-align: center;
`;
