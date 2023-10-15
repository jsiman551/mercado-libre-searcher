import React, { useRef, useState } from 'react'
import { productObjectType } from '@/constants/types'
import EmptyState from '../empty-state'
import HeaderSearcher from '../header-searcher'
import PriceFilter from '../price-filter'
import ProductElement from '../product-element'
import { ProductListContainer } from '../product-element/styles'
import SortSelector from '../sort-selector'
import { useAppSelector } from '@/hooks/useAppSelector'
import { RootState } from '@/redux/store'
import { ContentContainer, OnlyLongResolutions } from './styles'
import MobileSidebar from '../mobile-sidebar'

const Content = () => {
  const priceRangeformRef = useRef<HTMLFormElement>(null)
  const [priceRangeSubmit, setPriceRangeSubmit] = useState<boolean>(false)
  const resultData = useAppSelector(
    (state: RootState) => state.searchData.result,
  )
  return (
    <>
      <HeaderSearcher
        priceRangeformRef={priceRangeformRef}
        setPriceRangeSubmit={setPriceRangeSubmit}
      />
      <EmptyState />
      {resultData?.length ? (
        <ContentContainer>
          <OnlyLongResolutions>
            <PriceFilter
              priceRangeformRef={priceRangeformRef}
              priceRangeSubmit={priceRangeSubmit}
              setPriceRangeSubmit={setPriceRangeSubmit}
            />
          </OnlyLongResolutions>
          <div>
            <SortSelector />
            <ProductListContainer>
              {resultData.map((product: productObjectType, index: number) => {
                const {
                  thumbnail,
                  title,
                  price,
                  shipping,
                  address,
                  condition,
                  permalink,
                } = product
                return (
                  <ProductElement
                    thumbnail={thumbnail || ''}
                    title={title || ''}
                    price={price || 0}
                    shipping={shipping || { free_shipping: false }}
                    address={address || { state_name: '', city_name: '' }}
                    condition={condition || ''}
                    permalink={permalink || ''}
                    key={index}
                  />
                )
              })}
            </ProductListContainer>
          </div>
        </ContentContainer>
      ) : null}
      <MobileSidebar
        priceRangeformRef={priceRangeformRef}
        priceRangeSubmit={priceRangeSubmit}
        setPriceRangeSubmit={setPriceRangeSubmit}
      />
    </>
  )
}

export default Content
