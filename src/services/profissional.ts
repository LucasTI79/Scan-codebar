import { AxiosResponse } from "axios"
import apiLocal from "./apiLocal"

export const getProfissional = async () => {
  const response = await apiLocal.get('/professional')
  return response as AxiosResponse<IProfessional[]>
}

export const deleteProfessional = async (id: string) => {
  return await apiLocal.delete(`/professional/${id}`)
}
export interface IProfessional {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}