import { Colors } from '@styles'
import { 
  Label, 
  HideIcon, 
  TextInput, 
  ErrorText, 
  MaskTextInput, 
  DescriptionText, 
  TextInputContainer, 
} from '@components/TextInput/styles'

import React, { useEffect, useState } from 'react'
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline'

interface CustomTextInputProps {
  label: string
  setValue: any
  isSecured?: boolean
  error?: string
  placeholder?: string
  mask?: string
  description?: string
  value?: string
  isEditable?: boolean
}

export const CustomTextInput = (props: CustomTextInputProps) => {
  const { label, setValue, placeholder, isSecured, error, mask, description, value, isEditable = true } = props

  const [hideText, setHideText] = useState(!!isSecured)
  const [isFocused, setFocus] = useState(false)

  useEffect(() => {
    if (value) setValue(value)
  }, [])

  return (
    <>
      <Label>{label}</Label>
      {description && <DescriptionText>{description}</DescriptionText>}
      <TextInputContainer isFocused={isFocused} isValid={!(error)}>
        { mask 
          ? <MaskTextInput
            value={value}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder}
            clearButtonMode='while-editing'
            underlineColorAndroid='transparent'
            secureTextEntry={hideText}
            onChangeText={setValue}
            mask={mask}
            editable={isEditable}
          />
          : <TextInput
              value={value}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              placeholder={placeholder}
              clearButtonMode='while-editing'
              underlineColorAndroid='transparent'
              secureTextEntry={hideText}
              onChangeText={setValue}
              editable={isEditable}
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
