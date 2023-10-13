import { styled } from "styled-components";
import { tablet } from "@/constants/styles";

/****Sidebar For Filters in Mobile Resolution*****/
/* overlay element */
export const SidebarOverlay = styled.div<{ $isOpen: boolean; }>`
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    background: white;
    z-index: 10;
    box-shadow: 2px 0px 2px rgba(0,0,0,.25);
    transition: transform .5s;
    transform: ${props => props.$isOpen ? "translate(0)" : "translate(-246px)"};
    @media ${tablet} {
        display: none;
    }
`;

/* close button styles */
export const SidebarCloseButton = styled.button`
    float: right;
    background: transparent;
    border: 1px solid rgba(0,0,0,.25);
    border-radius: 4px;
    font-size: .875em;
    margin: 0.4rem 0.4rem 0 0
`;