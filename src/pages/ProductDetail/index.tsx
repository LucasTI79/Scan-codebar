import React from 'react';

import { getProduct } from '../../services/products'

import { Container } from './styles';

import { useParams } from 'react-router-dom';

import Info from './Info'

interface Product {
  isbn: string;
  name: string;
  coverUrl: string;
}

interface Params {
  isbn: string;
}

const ProductDetail: React.FC = () => {
  const { isbn } = useParams<Params>();
  const [product, setProduct] = React.useState({} as Product);

  React.useEffect(() => {
    (async() => {
      const res = await getProduct(isbn);
      setProduct(res)
    })()
  },[isbn])

  if(!product){
    return(
      <h1>Loading...</h1>
    )
  }else{
    return (
      <Container>
        <Info product={ product }/>
      </Container>
    )
  } 
}

export default ProductDetail;