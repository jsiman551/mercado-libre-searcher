import React from 'react'
import PriceFilter from '../price-filter'
import { SidebarOverlay, SidebarCloseButton } from './styles'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { RootState } from '@/redux/store'
import { GET_FLAG } from '@/redux/slices/sidebar-flag-slice/types'

const MobileSidebar = () => {
  const dispatch = useAppDispatch()
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.mobileSidebarFlag.flag,
  )

  return (
    <SidebarOverlay $isOpen={isSidebarOpen}>
      <SidebarCloseButton
        onClick={() => {
          /* set sidebar flag to store */
          dispatch({
            type: GET_FLAG,
            payload: false,
          })
        }}
      >
        Cerrar
      </SidebarCloseButton>
      <PriceFilter />
    </SidebarOverlay>
  )
}

export default MobileSidebar
