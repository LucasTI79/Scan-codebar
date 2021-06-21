import api from './api'

// export const getProduct = async (isbn: string) => {
//   const response = await api.get(`/products/${isbn}`)
//   return response.data
// }

export const getProsthesis = async  (isbn: string) => {
  const response = await api.get('/prosthesis');
  return response.data
}