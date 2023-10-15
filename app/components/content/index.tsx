import React from 'react'
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

const Content = () => {
  const resultData = useAppSelector(
    (state: RootState) => state.searchData.result,
  )
  return (
    <>
      <HeaderSearcher />
      <EmptyState />
      {resultData?.length ? (
        <ContentContainer>
          <OnlyLongResolutions>
            <PriceFilter />
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
    </>
  )
}

export default Content
