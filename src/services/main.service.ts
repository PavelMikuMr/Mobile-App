import { instance } from '../api'
import { MainInterface } from '../types/main.interface'

export const MainService = {
  async getProfile() {
    const response = await instance.get<MainInterface>(
      '/users/1'
    )
    return response.data
  },
  async getUsers() {
    const response = await instance.get<MainInterface[]>(
      '/users'
    )
    return response.data.filter((user) => user.id !== 1)
  }
}
