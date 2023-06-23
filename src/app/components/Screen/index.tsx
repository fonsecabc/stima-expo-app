import React, { ReactNode } from 'react'
import { ScreenContainer } from './styles'

interface ScreenProps {
  background: 'gray' | 'blue'
  children: ReactNode
}

export const Screen = (props: ScreenProps) => {
    const { background, children } = props

    return <ScreenContainer background={background}>{children}</ScreenContainer>
}
