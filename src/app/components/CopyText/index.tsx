import { Colors, FontSizes } from '@styles'
import { 
  Label, 
  DescriptionText, 
  Container, 
  Icon,
  Text
} from '@components/CopyText/styles'

import React from 'react'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'
import { DocumentDuplicateIcon } from 'react-native-heroicons/outline'

interface CopyTextProps {
  label?: string
  text: string
  description?: string
  successMessage?: string
}

export const CopyText = (props: CopyTextProps) => {
  const { label, description, text , successMessage = 'Código copiado!' } = props

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(text)
    Toast.show({ type: 'success', text1: successMessage })
  }

  return (
    <>
      {label && <Label>{label}</Label>}
      {description && <DescriptionText>{description}</DescriptionText>}
      <Container onPress={copyToClipboard}>
        <Text numberOfLines={1}>{text}</Text>
        <Icon>
          <DocumentDuplicateIcon color={Colors.white} size={FontSizes.lg}/>
        </Icon>
      </Container>
    </>
  )
}
