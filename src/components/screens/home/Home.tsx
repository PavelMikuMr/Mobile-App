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
  Flex,
  Heading,
  useDisclosure,
  Text
} from '@chakra-ui/react'

import Balance from './Balance'
import Icon from '../icon/Icon'
import TransferModal from './transfer-money/TransferModal'
import {
  useProfile,
  useProfileUsers
} from './../../../hooks/useProfile'

import { instance } from '../../../api'

const Home = () => {
  // //////////////////////////////////////////
  const requestDebug = () => {
    instance
      .get('/users', {
        params: {
          id: 2
        }
      })
      .then((response: any) => {
        console.log(response.data)
      })
      .catch((error: any) => console.error(error))
  }

  const arrowRequest = async () => {
    try {
      const request = await instance.get('/users', {
        params: {
          name: 'Ryan Ericson'
        }
      })
      console.log(request.data)
      return request.data
    } catch (error) {
      console.error(error)
    }
  }

  const arrowGet = async () => {
    try {
      const request = await instance.get('/users', {
        params: {
          id: 1
        }
      })
      console.log(request.data)
    } catch (error) {
      console.error(error)
    }
  }

  ///////////////////////////////////////////////////////////////
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useProfile()
  const { users } = useProfileUsers()
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
            <Heading className='user-name' fontSize='2xl'>
              {user?.name}
            </Heading>
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
        {/* <Box className='Button-axios-test'>
          <button
            onClick={arrowGet}
            style={{
              background: 'green',
              margin: '10px',
              padding: '5px'
            }}
          >
            request async
          </button>
        </Box> */}
      </Box>
    </>
  )
}

export default Home
