import { LogoContainer, LogoImage } from './styles'

import React from 'react'

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage source={require('../../public/logo.png')} />
    </LogoContainer>
  )
}
