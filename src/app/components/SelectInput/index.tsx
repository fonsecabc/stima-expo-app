import { Colors } from '../../styles'
import { ErrorText, Label, SelectInput, Item, Placeholder, BottomModal, DescriptionText } from './styles'

import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { ChevronDownIcon } from 'react-native-heroicons/outline'

interface CustomSelectInputProps {
  items: Array<SelectItem>
  label: string
  setValue: any
  placeholder: string 
  error?: string
  description?: string
}

type SelectItem = {
  key: string, value: any
}

export const CustomSelectInput = (props: CustomSelectInputProps) => {
  const { items, label, setValue, placeholder, error, description } = props
  const [isFocused, setFocus] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState('')

  return (
    <>
      <Label>{label}</Label>
      {description && <DescriptionText>{description}</DescriptionText>}
      <SelectInput
        onPress={() => setFocus(true)}
        isFocused={isFocused}
        isValid={!(error)}
      >
        <Placeholder>
          {selectedLabel || placeholder}

        </Placeholder>
        <ChevronDownIcon color={Colors.darkGray}/>
      </SelectInput>
      { error && <ErrorText>{error}</ErrorText>}
      <BottomModal
        isVisible={isFocused}
        onBackdropPress={() => setFocus(false)}
        onSwipeComplete={() => setFocus(false)}
        backdropOpacity={0.3}
      >
        <View 
          style={{ 
            flex: 1/4,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20
          }}
        >
          <FlatList
            style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
            data={items}
            renderItem={({ item }: { item: any }) => 
              <Item onPress={() => {
                setValue(item.value)
                setSelectedLabel(item.key)
                setFocus(false)
              }}>
                <Placeholder>{item.key}</Placeholder>
              </Item>
            }
            keyExtractor={(item: any) => item.key}
          />
        </View>
      </BottomModal>
    </>
  )
}