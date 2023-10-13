import styled from "styled-components";
import { tablet, desktop } from "@/constants/styles";

/**************Sort Selector Styles*****************/
/* Selector Container */
export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  @media ${tablet} {
    justify-content: end;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: end;
`;

/* Selector Label */
export const Label = styled.div`
  margin-right: 0.4rem;
  font-weight: 500;
  font-size: 0.875em;
`;

/* Selector Text */
export const OptionText = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875em;
  cursor: pointer;
  &:hover {
    color: #3483fa;
  }
`;

/* Selector Arrow Icon */
export const ArrowIcon = styled.img<{ $active: boolean }>`
  transform: ${(props) => (props.$active ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease-out;
  margin-top: 3px;
  margin-left: 2px;
`;

/* Selector Elements Container */
export const ElementContainer = styled.ul`
  border-radius: 0.375em;
  position: absolute;
  top: 101px;
  background-color: #fff;
  padding: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  font-size: 0.875em;
  width: 134px;
  @media ${desktop} {
    padding-right: 1rem;
  }
`;

/* Selector Elements Option */
export const ElementOption = styled.li<{ $active: boolean }>`
  border-collapse: collapse;
  color: ${(props) => (props.$active ? "#3483fa" : "#666")};
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  display: flex;
  height: 41px;
  border-bottom: 1px solid #d8d8d8;
  padding: 1rem;
  font-weight: ${(props) => (props.$active ? "500" : "400")};
  &:before {
    background: ${(props) => (props.$active ? "#3483fa" : "")};
    content: "";
    position: absolute;
    width: 5px;
    height: 41px;
    left: 0;
  }
  &:hover {
    &:after {
      background: ${(props) => (props.$active ? "#3483fa" : "#9cc4db")};
      content: "";
      left: 0;
      position: absolute;
      width: 5px;
      height: 41px;
    }
    background-color: rgba(0, 0, 0, 0.04);
    transition: background-color 0.1s ease-out;
  }
  &:first-child {
    border-top-left-radius: 0.375em;
    border-top-right-radius: 0.375em;
    &:after {
      border-top-left-radius: 0.375em;
    }
    &:before {
      border-top-left-radius: 0.375em;
    }
  }
  &:last-child {
    border: 0;
    &:after {
      border-bottom-left-radius: 0.375em;
    }
    &:before {
      border-bottom-left-radius: 0.375em;
    }
  }
`;

/****Sidebar For Filters in Mobile Resolution*****/
export const SidebarButton = styled.button`
  display: flex;
  background-color: white;
  border-radius: 4px;
  border: 1px solid;
  cursor: pointer;
  @media ${tablet} {
    display: none;
  }
`;
