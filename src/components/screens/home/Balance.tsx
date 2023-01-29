import {
  Box,
  Center,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import { useProfile } from './../../../hooks/useProfile'

const Balance = () => {
  const { user } = useProfile()
  return (
    <Center mt={'3rem'} position={'relative'}>
      <Box
        position='relative'
        zIndex={1}
        _before={{
          content: '""',
          width: '10rem',
          height: '7rem',
          background: '#c060b8',
          position: 'absolute',
          filter: 'blur(75px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        }}
      >
        <Flex direction='column' align='center'>
          <Heading fontSize='5xl'>
            $ {user?.balance || 'undefined'}
          </Heading>
          <Text fontSize='xl' color='whiteAlpha.500'>
            Balance
          </Text>
        </Flex>
      </Box>
    </Center>
  )
}
export default Balance
