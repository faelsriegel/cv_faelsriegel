import React from 'react'
import { Heading, Text, Flex, Box, Link } from '@chakra-ui/react'
import { FaCircle } from 'react-icons/fa'

interface SubtitleInterface {
  email: string
}

const Subtitle: React.FC<SubtitleInterface> = ({ email }) => {
  return (
    <Flex
      flexDir="row"
      alignItems="center"
      fontSize={{ sm: 'md', lg: '3xl' }}
      color="white.200"
    >
      <Heading as="h2"
      color="white.200"
      fontSize={{ sm: 'xl', lg: '3xl' }}>

        <Text fontWeight="light" display="inline">
          Engenheiro de Computação
        </Text>
        <Text fontWeight="bold" display="inline">

        </Text>
      </Heading>

      <Box
        as={FaCircle}
        color="white.200"
        boxSize={{ sm: '6px', lg: '8px' }}
        mx={{ sm: '2', lg: '3' }}
      />

      <Link href="mailto:rafaelsriegel@gmail.com" isExternal>
        <Text fontWeight="light" color="white.200" textTransform="lowercase">
          {email}
        </Text>
      </Link>
    </Flex>
  )
}

export default Subtitle
