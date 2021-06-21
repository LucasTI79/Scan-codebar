import api from './api'

// export const getProduct = async (isbn: string) => {
//   const response = await api.get(`/products/${isbn}`)
//   return response.data
// }

const db = [
  {
    "id":"9788576082675",
    "isbn":"9788576082675",
    "name":"Código Limpo",
    "coverUrl":"https://m.media-amazon.com/images/P/B001GSTOAM.01._SCLZZZZZZZ_SX500_.jpg"
  },
  {
    "id":"9788532520661",
    "isbn":"9788532520661",
    "name":"Margaret - O conto Atwood da Aia",
    "coverUrl":"https://m.media-amazon.com/images/P/B076652S9G.01._SCLZZZZZZZ_SX500_.jpg"
  },
  {
    "id":"9788525057006",
    "isbn":"9788525057006",
    "name":"Agatha Christie - O Assassinato de Roger Ackroyd",
    "coverUrl":"https://m.media-amazon.com/images/I/61oH0+EnyGL.jpg"
  },
  {
    "id":"9788543104331",
    "isbn":"9788543104331",
    "name":"Brené Brown - A Coragem de ser imperfeito",
    "coverUrl":"https://images-na.ssl-images-amazon.com/images/I/512MA0KMAbL._SX342_SY445_QL70_ML2_.jpg"
  },
  {
    "id":"9788582355442",
    "isbn":"9788582355442",
    "name":"O Último Suspiro - Robert Bryndza",
    "coverUrl":"https://m.media-amazon.com/images/I/51F1bRRU8fL.jpg"
  },
  {
    "id":"9788581052755",
    "isbn":"9788581052755",
    "name":"Escuridão Total sem Estrelas - Stephen King",
    "coverUrl":"https://m.media-amazon.com/images/P/B00UFUYZZG.01._SCLZZZZZZZ_SX500_.jpg"
  },
]

export const getProduct = async  (isbn: string) => {
  return db.find(product => product.isbn === isbn)
}