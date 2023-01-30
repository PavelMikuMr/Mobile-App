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

import { formatCardNumber } from '../../../../utils/format-card-number'
import { ITransferData } from './transfer.interface'
import { useProfile } from '../../../../hooks/useProfile'
import { useMutation, useQueryClient } from 'react-query'
import {
  ITransferMoney,
  UserService
} from './../../../../services/user.service'
import { useState } from 'react'
import SuccessAlert from './SuccessAlert'

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
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ITransferData>({
    mode: 'onChange',
    defaultValues: {
      amount: 0
    }
  })

  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    ['transfer money'],
    (data: ITransferMoney) =>
      UserService.transferMoney(data),
    {
      async onSuccess() {
        setIsSuccess(true)
        reset()
        await queryClient.invalidateQueries(['profile'])

        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
      }
    }
  )

  const onSubmit: SubmitHandler<ITransferData> = (data) => {
    if (!user?.card) return
    mutate({
      card: data.card,
      amount: Number(data.amount),
      fromCard: user.card
    })
  }
  const { user } = useProfile()
  const [isSuccess, setIsSuccess] = useState(false)
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
          {isSuccess && <SuccessAlert />}
          <ModalHeader>Transfer your money</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <Input
                  placeholder='From card'
                  size='md'
                  defaultValue={formatCardNumber(
                    user?.card || 0
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
                  isLoading={isLoading}
                  loadingText='Sending money...'
                  type='submit'
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
