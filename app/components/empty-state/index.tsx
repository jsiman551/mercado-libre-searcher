import React from 'react'
import { EmptyResultsContainer, EmptyResultsText } from './styles'
import { useAppSelector } from '@/hooks/useAppSelector'

const EmptyState = () => {
  const loadingState = useAppSelector(
    (state) => state.searchData.loading,
  )
  const resultData = useAppSelector(
    (state) => state.searchData.result,
  )
  return (
    <>
      {resultData?.length === 0 || resultData === null ? (
        <EmptyResultsContainer data-testid="emptyResultsContainer">
          <EmptyResultsText>
            {resultData === null && !loadingState
              ? 'Intenta realizar una búsqueda para visualizar una lista de productos.'
              : null}
            {resultData?.length === 0 && !loadingState
              ? 'No hay resultados para tu búsqueda.'
              : null}
            {loadingState ? 'Obteniendo resultados para tu búsqueda...' : null}
          </EmptyResultsText>
        </EmptyResultsContainer>
      ) : null}
    </>
  )
}

export default EmptyState
