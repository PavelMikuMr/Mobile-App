// import {   } from 'react'

import {
  useDisclosure,
  Center,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Button
} from '@chakra-ui/react'

interface IconProps {
  width: number
  height: number
  children?: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Icon = ({
  width,
  height,
  children,
  className,
  onClick
}: IconProps) => {
  return (
    <>
      <Center>
        <Button
          onClick={onClick}
          className={className}
          display={'inline-flex'}
          w={width}
          h={height}
          rounded={'50%'}
        >
          {children}
        </Button>
      </Center>
    </>
  )
}
export default Icon
