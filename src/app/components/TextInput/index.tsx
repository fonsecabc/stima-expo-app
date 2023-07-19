import { 
  TextInputContainer, 
  TextInput, 
  HideIcon, 
  MaskTextInput, 
  ErrorText, 
  Label, 
  DescriptionText 
} from './styles'
import { Colors } from '../../styles'

import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline'

interface CustomTextInputProps {
  label: string
  setValue: any
  isSecured?: boolean
  error?: string
  placeholder?: string
  mask?: string
  description?: string
}

export const CustomTextInput = (props: CustomTextInputProps) => {
  const { label, setValue, placeholder, isSecured, error, mask, description } = props

  const [hideText, setHideText] = useState(!!isSecured)
  const [isFocused, setFocus] = useState(false)

  return (
    <>
      <Label>{label}</Label>
      {description && <DescriptionText>{description}</DescriptionText>}
      <TextInputContainer isFocused={isFocused} isValid={!(error)}>
        { mask 
          ? <MaskTextInput
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder}
            clearButtonMode='while-editing'
            underlineColorAndroid='transparent'
            secureTextEntry={hideText ? true : false}
            onChangeText={(text) => setValue(text)}
            mask={mask}
          />
          : <TextInput
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder}
            clearButtonMode='while-editing'
            underlineColorAndroid='transparent'
            secureTextEntry={hideText ? true : false}
            onChangeText={(text) => setValue(text)}
          />
        }
        {isSecured && (
          <HideIcon onPress={() => setHideText(!hideText)}>
            {hideText ? <EyeIcon color={Colors.darkGray}/> : <EyeSlashIcon color={Colors.darkGray}/>}
          </HideIcon>
        )}
      </TextInputContainer>
      { error && <ErrorText>{error}</ErrorText>}
    </>
  )
}
