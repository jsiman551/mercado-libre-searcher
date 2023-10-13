import { styled } from "styled-components";

/*****Tag Icon Styles******/
export const TagIconContainer = styled.span<{ $bgColor: string }>`
  background: ${(props) => props.$bgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;
