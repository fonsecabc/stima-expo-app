import { LogoContainer, LogoImage } from '@components/Logo/styles'

import React from 'react'

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage source={require('../../public/logo.png')} />
    </LogoContainer>
  )
}
