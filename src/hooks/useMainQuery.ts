import { useQuery } from 'react-query'
import { instance } from '../api'
import { MainService } from '../services/main.service'

export const useMainQuery = () => {
  const { data } = useQuery(['profile'], () =>
    MainService.getProfile()
  )
  return { user: data }
}
export const useMainQueryUsers = () => {
  const { data } = useQuery(['users'], () =>
    MainService.getUsers()
  )
  return { users: data }
}
