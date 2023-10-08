import { ScreenContainer } from '@components/Screen/styles'

import React, { ReactNode } from 'react'

interface ScreenProps {
  background: 'gray' | 'blue'
  children: ReactNode
}

export const Screen = (props: ScreenProps) => {
  const { background, children } = props

  return <ScreenContainer 
    background={background} 
  >
    {children}
  </ScreenContainer>
}
