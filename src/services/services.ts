import { AxiosResponse } from "axios"
import apiLocal from "./apiLocal"

export const getServices = async () => {
  const response = await apiLocal.get('/services')
  return response as AxiosResponse<IServices>
}

export interface IServices {
  name: string,
  id: string,
  lab: ILab
}

export interface ILab {
  name: string,
  id: string,
}

