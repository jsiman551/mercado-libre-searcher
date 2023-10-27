import React, { RefObject } from 'react'
import PriceFilter from '../price-filter'
import { SidebarOverlay, SidebarCloseButton } from './styles'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { GET_FLAG } from '@/redux/slices/sidebar-flag-slice/types'

interface Props {
  priceRangeformRef: RefObject<HTMLFormElement>
  priceRangeSubmit: boolean
  setPriceRangeSubmit: (arg: boolean) => void
}

const MobileSidebar = ({
  priceRangeformRef,
  priceRangeSubmit,
  setPriceRangeSubmit,
}: Props) => {
  const dispatch = useAppDispatch()
  const isSidebarOpen = useAppSelector(
    (state) => state.mobileSidebarFlag.flag,
  )

  return (
    <SidebarOverlay $isOpen={isSidebarOpen} data-testid="sidebarContainer">
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
      <PriceFilter
        priceRangeformRef={priceRangeformRef}
        priceRangeSubmit={priceRangeSubmit}
        setPriceRangeSubmit={setPriceRangeSubmit}
      />
    </SidebarOverlay>
  )
}

export default MobileSidebar
