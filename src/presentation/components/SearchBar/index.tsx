import React, { useState } from 'react'

import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { SearchBarContainer, SearchIcon, SearchInputContainer, SearchTextInput } from './styles'

interface SearchBarProps {
  handleSearch(searchText: string): void
  placeholder: string
}

export const SearchBar = ({ handleSearch, placeholder }: SearchBarProps) => {
    const [searchText, setSearchText] = useState('')

    return (
        <SearchBarContainer behavior="padding">
            <SearchInputContainer>
                <SearchTextInput
                    placeholder={placeholder}
                    onChangeText={(searchText) => (setSearchText(searchText), handleSearch(searchText))}
                    defaultValue={searchText}
                    onSubmitEditing={() => (setSearchText(searchText), handleSearch(searchText))}
                    underlineColorAndroid="transparent"
                    clearButtonMode="while-editing"
                />
            </SearchInputContainer>
            <SearchIcon onPress={() => handleSearch(searchText)}>
                <MagnifyingGlassIcon size={30} />
            </SearchIcon>
        </SearchBarContainer>
    )
}
