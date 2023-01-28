import {
  Controller,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Stack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  CheckboxIcon
} from '@chakra-ui/react'

import { user } from '../Home'
import { formatCardNumber } from '../../../../utils/format-card-number'
import { ITransferData } from './transfer.interface'

interface TransferModalProps {
  isOpen: boolean
  onClose: () => void
  size: string
}

const TransferModal = ({
  isOpen,
  onClose,
  size
}: TransferModalProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting }
  } = useForm<ITransferData>({
    mode: 'onChange',
    defaultValues: {
      amount: 0
    }
  })

  const onSubmit: SubmitHandler<ITransferData> = (
    data
  ) => {}

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent bg='#111'>
          <ModalHeader>Transfer your money</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <Input
                  placeholder='From card'
                  size='md'
                  defaultValue={formatCardNumber(
                    user.cardNumber
                  )}
                  disabled
                />
                <Controller
                  control={control}
                  name='card'
                  render={({
                    field: { onChange, name, value }
                  }) => (
                    <FormControl>
                      <Input
                        name={name}
                        size='md'
                        id='name'
                        placeholder='To card'
                        value={formatCardNumber(value)}
                        onChange={(e) =>
                          onChange(e.target.value)
                        }
                      />
                      <FormErrorMessage>
                        {errors.card?.message}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                  rules={{
                    required: 'This is required',
                    minLength: {
                      value: 16,
                      message: 'Min length should be 16'
                    }
                  }}
                />
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2rem'
                    children='$'
                  />
                  <Input
                    placeholder='Enter amount'
                    size='md'
                    {...register('amount', {
                      required: 'This is required'
                    })}
                  />
                  <InputRightElement
                    children={
                      <CheckboxIcon color='green.500' />
                    }
                  />
                </InputGroup>
                <Button
                  variant='outline'
                  colorScheme='green'
                >
                  Send money
                </Button>
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='purple'
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default TransferModal
