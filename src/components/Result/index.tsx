import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Wrapper, Cover, Info, ActionButtons } from './styles'

import { getProduct } from '../../services/products';

interface Props {
  isbn: string
}

interface Product {
  name: string;
  coverUrl: string;
}

const Result: React.FC<Props> = ({ isbn }) => {
  const [product, setProduct] = React.useState({} as Product);
  React.useEffect(() => {
    (async() => {
      const res = await getProduct(isbn);
      setProduct(res)
    })()
  },[isbn])

  return(
    <Container>
      { product && (
        <Link to={`/product/${isbn}`}>
          <Wrapper>
            <Cover src={product.coverUrl} />
            <Info>
              <h4 className="name">{product.name}</h4>
            </Info>
            <ActionButtons >
              <span className="button">
                <MdArrowForward size={32} color={'#fff'}/>  
              </span>         
            </ActionButtons>
          </Wrapper>
        </Link>
      ) }
    </Container>
  )
}

export default Result