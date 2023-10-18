import { styled } from 'styled-components'
import { desktop, tablet } from '@/constants/styles'

/****************Price Filter Styles*********************/
/* Price Filter Container */
export const Container = styled.div`
  font-size: ${(props) => props.theme.fontSize.normal};
  box-sizing: border-box;
  padding-right: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  width: 80%;
  margin: 3rem 0 0 1rem;
  @media ${tablet} {
    border: 0;
    margin-left: 0;
    margin-top: 2rem;
    width: 45%;
    padding-top: 3rem;
  }
  @media ${desktop} {
    width: 30%;
  }
`

/* Price Label */
export const Label = styled.h3`
  color: ${(props) => props.theme.color.charcoalGray};
  font-size: ${(props) => props.theme.fontSize.normal};
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 8px;
`

/* Price List Container */
export const ListContainer = styled.ul`
  padding: 0;
  margin-top: 0;
`

/* Price List Element */
export const RangeElement = styled.li`
  border-collapse: collapse;
  box-sizing: border-box;
  list-style: none;
  font-size: ${(props) => props.theme.fontSize.regular};
  margin: 0 0 6px;
  cursor: pointer;
`

/* Price Link */
export const RangeLink = styled.a`
  border-collapse: collapse;
  font-size: ${(props) => props.theme.fontSize.regular};
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  &:hover span {
    color: ${(props) => props.theme.color.dodgerBlue};
  }
`

/* Price Link Name */
export const RangeLinkName = styled.span`
  border-collapse: collapse;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.dimGray};
  float: left;
  font-size: ${(props) => props.theme.fontSize.regular};
  margin-left: 0;
`

/* Price Link Quantity */
export const RangeLinkQuantity = styled.span`
  border-collapse: collapse;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.mediumGray};
  float: left;
  font-size: ${(props) => props.theme.fontSize.regular};
  margin-left: 6px;
`

/* Price Filter Form */
export const RangeForm = styled.form`
  font-size: ${(props) => props.theme.fontSize.normal};
  line-height: 1.35;
  list-style: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`

/* Price Input Container */
export const InputContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.normal};
  align-items: center;
  display: flex;
  &:first-child {
    &:after {
      color: ${(props) => props.theme.color.mediumGray};
      content: '—';
      float: left;
      margin: 0 5px;
      padding: 7px 0;
      font-size: ${(props) => props.theme.fontSize.small};
    }
  }
`

/* Price Filter Input */
export const RangeInput = styled.input`
  box-sizing: border-box;
  border: 0;
  color: rgba(0, 0, 0, 0.9);
  margin: 0;
  padding: 0.8125em 0.75em;
  background-color: ${(props) => props.theme.color.lightGray};
  border-radius: 0.375em;
  font-size: ${(props) => props.theme.fontSize.slightlySmaller};
  height: 25px;
  width: 84px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: 0;
    box-shadow:
      inset 0 0 0 1px ${(props) => props.theme.color.white},
      0 0 0 1px ${(props) => props.theme.color.deepBlue};
  }
`

/* Price Filter Button */
export const RangeButton = styled.button<{ $active: boolean }>`
  align-items: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 24px;
  margin-left: 8px;
  width: 24px;
  background-color: ${(props) =>
    props.$active
      ? props.theme.color.dodgerBlue
      : props.theme.color.platinumGray};
`
