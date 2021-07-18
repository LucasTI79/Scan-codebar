import { AxiosResponse } from "axios"
import apiLocal from "./apiLocal"

export const getPatients = async () => {
  const response = await apiLocal.get('/patients')
  return response as AxiosResponse<IPatient[]>
}

export interface IPatient {
  id: string,
  name: string,
  RG: string,
  CPF: string,
  email: string,
  phone: string,
  birthday: string,
  gender: string,
  plan: IPlan
}

interface IPlan {
  active: boolean,
  id: string,
  defaultPlan: boolean,
  name: string,
}