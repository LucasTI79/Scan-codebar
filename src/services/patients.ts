import { AxiosResponse } from "axios"
import apiLocal from "./apiLocal"

export const getPatients = async () => {
  const response = await apiLocal.get('/patients')
  return response as AxiosResponse<IPatient[]>
}

export const deletePatient = async (id: string) => {
  return await apiLocal.delete(`/patients/${id}`)
}

export const searchPatient = async(q: string) => {
  const response =  await apiLocal.get(`/patients/search?q=${q}`)
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