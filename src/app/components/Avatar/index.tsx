import { AvatarContainer, Letter } from './styles'

import React from 'react'

interface AvatarProps {
  letter: string
}

export const Avatar = (props: AvatarProps) => {
  const { letter } = props

  return (
    <AvatarContainer>
      <Letter>{letter}</Letter>
    </AvatarContainer>
  )
}
