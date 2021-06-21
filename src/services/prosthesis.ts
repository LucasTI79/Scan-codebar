import api from './api'

// export const getProduct = async (isbn: string) => {
//   const response = await api.get(`/products/${isbn}`)
//   return response.data
// }

export const getProsthesis = async  (isbn: string) => {
  const response = await api.get(`/prosthesis/${isbn}`);
  console.log('data', response.data)
  return response.data
}