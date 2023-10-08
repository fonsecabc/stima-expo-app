import { EmptyListItem, EmptyListItemText } from '@components/List/styles'

import React from 'react'
import { FlatList } from 'react-native'

interface ListProps {
  list: any[]
  emptyListMessage: string
  ItemComponent: any
}

export const List: React.FC<ListProps> = (props: ListProps) => {
  const { list, emptyListMessage, ItemComponent } = props

  return (
    <FlatList 
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 , marginHorizontal: 20, paddingTop: 10 }}
      data={list}
      extraData={list}
      renderItem={({ item }) => <ItemComponent item={item}/>}
      keyExtractor={(item) => item.uid}
      ListEmptyComponent={
        <EmptyListItem>
          <EmptyListItemText>{emptyListMessage}</EmptyListItemText>
        </EmptyListItem>
      }
    />
  )
}
