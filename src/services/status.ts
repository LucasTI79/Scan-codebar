import { AxiosResponse } from "axios"
import apiLocal from "./apiLocal"

export const getStatus = async () => {
  const response = await apiLocal.get('/status')
  return response as AxiosResponse<IStatus[]>
}

export const registerStatus = async(name: string) => {
  const response = await apiLocal.post('/status', { name })
  return response as AxiosResponse<IStatus>
}

export const deleteStatus = async (id: string) => {
  return await apiLocal.delete(`/status/${id}`)
}

export interface IStatus {
  name: string,
  id: string
}
