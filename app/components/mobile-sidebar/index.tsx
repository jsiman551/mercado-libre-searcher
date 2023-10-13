import React, { useContext } from 'react';
import PriceFilter from '../price-filter';
import { ApiContext } from '@/pages';
import { 
    SidebarOverlay, 
    SidebarCloseButton 
} from './styles';

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
