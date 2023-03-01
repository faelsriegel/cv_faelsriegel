import React from 'react'
import { Text, Flex, Heading, Link, Button, Stack } from '@chakra-ui/react'
import Subtitle from './subtitle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiOverleaf } from 'react-icons/si'

import { motion } from 'framer-motion'

import about from '../../../data/en/about'

const About: React.FC = () => {
  const transition = { delay: 0.2, duration: 0.9 }

  return (
    <Flex
      id="about"
      flexDir="column"
      mt={{ sm: '32', lg: '40' }}
      width={{ sm: '90%', lg: '80%' }}
      mx="auto"
      height="100vh"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={{
          hidden: { y: -180, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1
          }
        }}
      >
        <Heading
          as="h1"
          color="white.200"
          fontSize={{ sm: '4xl', lg: '6xl' }}
          fontWeight="bold"
          mb="4"

        >
          {about.name}
        </Heading>

        <Subtitle email={about.email} />

      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={{
          hidden: { x: -150, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1
          }
        }}
      >
        <Text
          fontWeight="light"
          color="white.200"
          mt="8"
          maxW="840px"
          fontSize={{ sm: 'md', lg: 'lg' }}
          lineHeight="lg"
        >
          {about.description}
        </Text>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={{
          hidden: { y: 180, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1
          }
        }}
      >
        <Stack direction="row" spacing={5} mt="8">
          <Link
            isExternal
            href="cv"
            _hover={{ textDecor: 'none' }}
          >
            <Button
              leftIcon={<SiOverleaf />}
              style={{
                padding: '0.7em 2.7em',
                fontSize: '20px',
                letterSpacing: '0.06em',
                position: 'relative',
                borderRadius: '0.6em',
                overflow: 'hidden',
                transition: 'all 0.3s',
                lineHeight: '1.4em',
                border: 'none',
                backgroundColor: 'blue',
                color: 'white',
                boxShadow: 'none',
              }}
            >
              <button
                style={{
                  padding: '10px 50px',
                  fontSize: '20px',
                  border: 'none',
                  borderRadius: '5px',
                  color: 'white',
                  backgroundColor: 'blue',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    clipPath: 'inset(50% 50% 50% 50%)',
                    content: '"Curriculum Vitae"',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'block',
                  }}
                ></span>
              </button>
            </Button>
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/in/rafael-stuepp-riegel/"
            _hover={{ textDecor: 'none' }}
          >
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="blue"
              variant="solid"
            >
              Linkedin
            </Button>
          </Link>

          <Link
            isExternal
            href="https://github.com/faelsriegel"
            _hover={{ textDecor: 'none' }}
          >
            <Button
              leftIcon={<FaGithub />}
              font-size="15px"
              padding="0.7em 2.7em"
              letter-spacing="0.06em"
              position="relative"
              border-radius="0.6em"
              overflow="hidden"
              transition="all 0.3s"
              line-height="1.4em"
              border="2px solid var(green.200)"
              background="linear-gradient(to right, rgba(27, 253, 156, 0.4) 100%, transparent 40%,transparent 50% , rgba(27, 253, 156, 0.4) 100%)"
              color="white.200"
              box-shadow="inset 10px 10px 10px rgba(27, 253, 156, 0.1), 0 0 9px 3px rgba(27, 253, 156, 0.1)"
            >
              Github
            </Button>
          </Link>

        </Stack>
      </motion.div>
    </Flex>
  )
}

export default About
