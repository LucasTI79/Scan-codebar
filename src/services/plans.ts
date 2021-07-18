import { AxiosResponse } from "axios"
import apiLocal from "./apiLocal"

export const getPlans = async () => {
  const response = await apiLocal.get('/plans')
  return response as AxiosResponse<IPlans[]>
}

export const registerPlan = async (name: string, active: boolean = true, defaultPlan: boolean = false) => {
  const response = await apiLocal.post('/plans', { name, active, defaultPlan })
  return response as AxiosResponse<IPlans>
}

export interface IPlans {
  name: string,
  id: string,
  defaultPlan: boolean,
  active: boolean
}

