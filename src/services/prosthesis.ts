import apiLocal from './apiLocal'

export const getProsthesis = async  (isbn: string) => {
  const response = await apiLocal.get(`/prosthesis/${isbn}`);
  return response.data
}

export const changeStatus = async (isbn: string, status: string) => {
  const response = await apiLocal.put(`/prosthesis/${isbn}`, { status });
  return response
}