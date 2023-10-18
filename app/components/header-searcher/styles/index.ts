import { styled } from 'styled-components'
import { desktop, tablet } from '@/constants/styles'

/************Styles For Header Section**************/
/* Header where searcher is */
export const Header = styled.header`
  background: ${(props) => props.theme.color.mainYellow};
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem 0.6rem 1rem;
  @media ${tablet} {
    padding: 0.6rem 2rem 0.6rem 2rem;
  }
  @media ${desktop} {
    padding: 0.6rem 0 0.6rem 0;
    justify-content: center;
  }
`

/* Header elements container (form) */
export const ElementsContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  @media ${desktop} {
    max-width: 1000px;
  }
`

/* input to search for items */
export const SearchInput = styled.input`
  height: 40px;
  color: ${(props) => props.theme.color.charcoalGray};
  padding: 0px 60px 0px 15px;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0);
  margin-left: 1.5rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`

/* button to submit search info */
export const SearchButton = styled.button`
  height: 43px;
  min-width: 50px;
  margin-left: -50px;
  background: ${(props) => props.theme.color.silverGray};
  border: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-top: 4px;
  cursor: pointer;
`
