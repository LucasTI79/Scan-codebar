import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Wrapper, Cover } from './styles';

interface Product {
  isbn: string;
  name: string;
  coverUrl: string;
}

interface Props {
  product: Product;
}

const Info: React.FC<Props> = ({ product }) => {
  console.log(product)
  return(
    <Wrapper>
      <Link className="go-back" to="/">
        <MdArrowBack size={32} color={'#2ecc71'}/>
      </Link>
      <Cover src={product.coverUrl} />
      <h4 className="name">{product.name}</h4>
    </Wrapper>
  )
}

export default Info;