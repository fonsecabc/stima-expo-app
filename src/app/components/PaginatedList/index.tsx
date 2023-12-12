import { Colors } from '@styles'
import { Container, IconContainer, ListContainer, PaginationContainer } from '@components/PaginatedList/styles'

import React, { useEffect, useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'

interface PaginatedListProps {
  list: Array<any>
  nextPage: () => Promise<void>
  previousPage: () => Promise<void>
  ItemComponent: (item: any) => JSX.Element
  EmptyComponent: () => JSX.Element
  LoadingComponent: () => JSX.Element
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
  currentPage: number
}

export const PaginatedList = (props: PaginatedListProps) => {
  const { list, nextPage, previousPage, ItemComponent, EmptyComponent, LoadingComponent, isLoading, setLoading, currentPage } = props

  const [data, setData] = useState<any[]>([])
  const isFirstPage = currentPage === 1
  const isLastPage = list.length === 0

  useEffect(() => {
    setLoading(true)
    setData(list)
    setLoading(false)
  }, [list])
  
  const handleLoadMore = async () => {
    if (!isLoading) {
      setLoading(true)
      await nextPage()
      setLoading(false)
    }
  }

  const handleLoadPrevious = async () => {
    if (!isLoading) {
      setLoading(true)
      await previousPage()
      setLoading(false)
    }
  }

  return (
    <Container>
      <ListContainer>
        {
          data.length === 0
            ? <EmptyComponent/> 
            : isLoading 
              ? <LoadingComponent/>
              : data.map((item, index) => <ItemComponent key={index} item={item}/>)
        }
      </ListContainer>
      <PaginationContainer>
        <IconContainer
          onPress={handleLoadPrevious}
          disabled={isFirstPage}
        >
          <ChevronLeftIcon color={Colors.white}/>
        </IconContainer>
        <IconContainer
          onPress={handleLoadMore}
          disabled={isLastPage}
        >
          <ChevronRightIcon color={Colors.white}/>
        </IconContainer>
      </PaginationContainer>
    </Container>
  )
}
  
