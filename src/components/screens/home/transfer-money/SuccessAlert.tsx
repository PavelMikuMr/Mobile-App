import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

const SuccessAlert = () => {
  return (
    <Alert
      status='success'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='full'
      pos='absolute'
      left={0}
      top={0}
      zIndex={3}
      bg={'#303f35'}
    >
      <AlertIcon boxSize='60px' mr={0} />
      <AlertTitle mt={4} mb={2} fontSize='3xl'>
        Money's been sent!
      </AlertTitle>
      <AlertDescription maxWidth='sm' fontSize='xl'>
        Thanks for using our application!
      </AlertDescription>
    </Alert>
  )
}
export default SuccessAlert
