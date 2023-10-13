import React, { useContext } from 'react';
import {
    SidebarCloseButton,
    SidebarOverlay,
} from '@/constants/styles';
import PriceFilter from './priceFilter';
import { ApiContext } from '@/pages';

const MobileSidebar = () => {
    const {
        setIsSidebarOpen,
    } = useContext(ApiContext)

    return (
        <SidebarOverlay>
            <SidebarCloseButton 
                onClick={() => setIsSidebarOpen(false)}
            >
                Cerrar
            </SidebarCloseButton>
            <PriceFilter />
        </SidebarOverlay>
    )
}

export default MobileSidebar;
