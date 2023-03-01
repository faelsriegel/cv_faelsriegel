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
            <button className="custom-button cv-button">
              <span>
                <SiOverleaf style={{ marginRight: '5px' }} />
                Curriculum Vitae
              </span>
            </button>
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/in/rafael-stuepp-riegel/"
            _hover={{ textDecor: 'none' }}
          >
            <button className="custom-button">
              <span>
                <FaLinkedin style={{ marginRight: '5px' }} />
                Linkedin
              </span>
            </button>
          </Link>

          <Link
            isExternal
            href="https://github.com/faelsriegel"
            _hover={{ textDecor: 'none' }}
          >

            <button className="custom-button">
              <span>
                <FaGithub style={{ marginRight: '5px' }} />
                Github
              </span>
            </button>
          </Link>
        </Stack>
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
      <div className="socket-container">
        <div className="socket">
          {<div class="socket">
            <div class="gel center-gel">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c1 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c2 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c3 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c4 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c5 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c6 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

            <div class="gel c7 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

            <div class="gel c8 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c9 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c10 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c11 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c12 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c13 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c14 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c15 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c16 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c17 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c18 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c19 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c20 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c21 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c22 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c23 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c24 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c25 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c26 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c28 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c29 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c30 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c31 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c32 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c33 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c34 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c35 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c36 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c37 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

          </div>}
        </div>
      </div>
      </motion.div>
    </Flex>
  )
}

export default About
