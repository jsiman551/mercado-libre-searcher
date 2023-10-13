/* Constants For Styling UI */
import styled from "styled-components";

/************ Breakpoints ****************/
const size = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1280px",
};

const deviceResolution = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const { mobile, tablet, desktop } = deviceResolution;
/********************************************/

/* only appears on long resolutions */
export const OnlyLongResolutions = styled.div`
  display: none;
  @media ${tablet} {
    display: contents;
  }
`;

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
