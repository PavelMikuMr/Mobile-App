import { instance } from '../api'
import { IUsers } from '../types/user.interface'

export const UserService = {
  async getProfile() {
    const response = await instance.get<IUsers>('/users/1')
    return response.data
  },
  async getUsers() {
    const response = await instance.get<IUsers[]>('/users')
    return response.data.filter((user) => user.id !== 1)
  },
  async getUserByCard(card: number) {
    const response = await instance.get<IUsers[]>(
      `/users/`,
      {
        params: {
          card
        }
      }
    )
    return response.data[0]
  },
  async transferMoney(
    amount: number,
    card: number,
    fromCard: number
  ) {
    const userFrom = await this.getUserByCard(fromCard)
    const userTo = await this.getUserByCard(card)
    await instance.patch(`users/${userFrom.id}`, {
      balance: userFrom.balance - amount
    })
    await instance.patch(`users/${userTo.id}`, {
      balance: userTo.balance + amount
    })
    const response = await instance.get<IUsers[]>(`/user`)
    return response.data.filter((user) => user.id !== 1)
  }
}
