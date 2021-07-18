import { AxiosResponse } from "axios"
import apiLocal from "./apiLocal"

export const getLabs = async () => {
  const response = await apiLocal.get('/labs')
  return response as AxiosResponse<ILabs[]>
}

export const registerLabs = async (name: string) => {
  const response = await apiLocal.post('/labs', {name})
  return response as AxiosResponse<ILabs>
}

export const deleteLab = async (id: string) => {
  return await apiLocal.delete(`/labs/${id}`)
}

export interface ILabs {
  name: string,
  id: string,
}

