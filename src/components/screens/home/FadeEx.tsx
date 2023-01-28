import {
  useDisclosure,
  Center,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Box,
  Button,
  Collapse
} from '@chakra-ui/react'

function ScaleFadeEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          Fade
        </Box>
      </ScaleFade>
    </>
  )
}
export default ScaleFadeEx
