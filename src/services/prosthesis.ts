import { AxiosResponse } from 'axios';
import apiLocal from './apiLocal'
import { IPatient } from './patients';
import { IProfessional } from './profissional';
import { ILab, IServices } from './services';

export const getAllProsthesis = async  () => {
  const response = await apiLocal.get(`/prosthesis`);
  return response as AxiosResponse<IProsthesis[]>
}

export const getProsthesis = async  (isbn: string) => {
  const response = await apiLocal.get(`/prosthesis/${isbn}`);
  return response as AxiosResponse<IProsthesis>
}

export const changeStatus = async (isbn: string, status: string) => {
  const response = await apiLocal.put(`/prosthesis/${isbn}`, { status });
  return response as AxiosResponse
}

export interface IProsthesis {
  id: string,
  box?: number,
  isbn: string,
  region?: string | null,
  patient: IPatient,
  service: IServices,
  DeliveryDate?: string,
  lab: ILab,
  professional: IProfessional,
  status: IStatus,
  createdAt?: string,
  updatedAt?: string
}

interface IStatus {
  id: string,
  name: string
}