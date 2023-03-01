import React from 'react'

import { Heading, HeadingProps } from '@chakra-ui/react'

const SectionTitle: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading
      color="white.200"
      as="h4"
      textAlign="center"
      alignSelf="center"
      fontSize="6xl"
      fontWeight="bold"
      mb="12"
      mx="auto"
      {...props}
    >
      {children}
    </Heading>
  )
}

export default SectionTitle
