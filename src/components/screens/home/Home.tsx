import { MouseEventHandler, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightArrowLeft,
  faTicket,
  faBolt,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons'
import {
  faYoutube,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowAltCircleDown,
  faUser
} from '@fortawesome/free-regular-svg-icons'
import {
  Box,
  Center,
  Flex,
  Heading,
  useDisclosure,
  Text,
  useBoolean,
  Button
} from '@chakra-ui/react'

import Balance from './Balance'
import Icon from '../icon/Icon'
import ScaleFadeEx from './FadeEx'
import TransferModal from './transfer-money/TransferModal'
export const user = {
  name: 'John Richardson',
  balance: 8_640,
  cardNumber: 3245_2345_9432_2543
}

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        bg='black'
        p='6'
        w={'31.25rem'}
        h={'95vh'}
        m={'20px auto auto auto'}
        rounded={'30px'}
      >
        <Flex mt={'1rem'} justifyContent={'space-between'}>
          <Box className='user-info'>
            <Text fontSize='xl' color='whiteAlpha.500'>
              Good Morning
            </Text>
            <Heading fontSize='2xl'>{user.name}</Heading>
          </Box>
          <Icon height={65} width={65}>
            <FontAwesomeIcon icon={faUser} size='2xl' />
          </Icon>
        </Flex>
        <Balance />
        <Flex justifyContent={'space-around'} mt={'3rem'}>
          <Box textAlign={'center'}>
            <Icon
              onClick={onOpen}
              className={'button'}
              height={65}
              width={65}
            >
              <FontAwesomeIcon
                icon={faArrowRightArrowLeft}
                size='2xl'
              />
            </Icon>
            <Text mt={'3'}>Transfer</Text>
          </Box>
          <Box textAlign={'center'}>
            <Icon
              className='icon-button'
              height={65}
              width={65}
            >
              <FontAwesomeIcon
                icon={faTicket}
                rotation={90}
                size='2xl'
              />
            </Icon>
            <Text mt={'3'}>Bils</Text>
          </Box>
          <Box textAlign={'center'}>
            <Icon height={65} width={65}>
              <FontAwesomeIcon icon={faBolt} size='2xl' />
            </Icon>
            <Text mt={'3'}>Recharge</Text>
          </Box>
          <Box textAlign={'center'}>
            <Icon height={65} width={65}>
              <FontAwesomeIcon
                icon={faEllipsis}
                size='2xl'
              />
            </Icon>
            <Text mt={'3'}>More</Text>
          </Box>
        </Flex>
        <TransferModal
          isOpen={isOpen}
          onClose={onClose}
          size='full'
        />
      </Box>
    </>
  )
}

export default Home
