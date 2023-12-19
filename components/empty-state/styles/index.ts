import { styled } from 'styled-components'
import { tablet } from '@/constants/styles'

/* container for empty results */
export const EmptyResultsContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.color.white};
  border-radius: 4px;
  margin: 3rem 1rem 0 1rem;
  @media ${tablet} {
    margin: 3rem auto 0 auto;
    max-width: 600px;
  }
`

/* message for empty results */
export const EmptyResultsText = styled.p`
  text-align: center;
`
