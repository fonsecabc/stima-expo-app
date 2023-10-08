import { AvatarContainer, Letter } from '@components/Avatar/styles'

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
