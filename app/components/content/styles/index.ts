import styled from "styled-components";
import { tablet, desktop } from "@/constants/styles";

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

/* only appears on long resolutions */
export const OnlyLongResolutions = styled.div`
  display: none;
  @media ${tablet} {
    display: contents;
  }
`;
