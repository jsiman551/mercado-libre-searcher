import { styled } from 'styled-components'
import { desktop, mobile, tablet } from '@/constants/styles'

/************Styles For Articles List Section**************/
/* product list container */
export const ProductListContainer = styled.div`
  background: ${(props) => props.theme.color.white};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  margin-bottom: 3rem;
`

/* product element container */
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.color.lightSilverGray};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  flex-direction: column;
  &:last-child {
    border-bottom: unset;
  }
  @media ${tablet} {
    flex-direction: row;
  }
`

/* product details container */
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${tablet} {
    flex-direction: row;
    align-items: center;
    width: 80%;
  }
`

/* product image Container */
export const ImageContainer = styled.div`
  text-align: center;
  @media ${tablet} {
    text-align: left;
  }
`

/* product image */
export const ProductImage = styled.img`
  border-radius: 4px;
  object-fit: contain;
`

/* product text details container */
export const Details = styled.div`
  margin-left: 1rem;
`

/* tag for product price text */
export const PriceText = styled.p`
  color: ${(props) => props.theme.color.charcoalGray};
  font-size: ${(props) => props.theme.fontSize.normal};
  margin-bottom: 0;
  display: flex;
  align-items: center;
  @media ${desktop} {
    font-size: ${(props) => props.theme.fontSize.large};
  }
`

/* tag for product Title text */
export const TitleText = styled.h2`
  margin-bottom: 0;
  font-size: ${(props) => props.theme.fontSize.normal};
  margin-top: 14px;
  font-weight: 400;
  @media ${desktop} {
    font-size: ${(props) => props.theme.fontSize.large};
  }
`

/* tag for product dues text */
export const DuesText = styled.p`
  margin-bottom: 0;
  color: ${(props) => props.theme.color.forestGreen};
  font-size: ${(props) => props.theme.fontSize.regular};
  @media ${desktop} {
    font-size: ${(props) => props.theme.fontSize.normal};
  }
`

/* tag for product location text */
export const LocationText = styled.p`
  color: ${(props) => props.theme.color.warmGray};
  font-size: ${(props) => props.theme.fontSize.regular};
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
`
