import { useQuery } from 'react-query'
import { instance } from '../api'
import { UserService } from '../services/user.service'

export const useProfile = () => {
  const { data } = useQuery(['profile'], () =>
    UserService.getProfile()
  )
  return { user: data }
}
export const useProfileUsers = () => {
  const { data } = useQuery(['users'], () =>
    UserService.getUsers()
  )
  return { users: data }
}
