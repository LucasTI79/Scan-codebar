import React from 'react';

import { getProsthesis } from '../../services/prosthesis'

import { Container } from './styles';

import { useParams } from 'react-router-dom';

import Info from './Info'

interface Prosthesis {
  isbn: string;
  name: string;
  service: string;
  dr: string;
  date: string;
}

interface Params {
  isbn: string;
}

const ProsthesisDetail: React.FC = () => {
  const { isbn } = useParams<Params>();
  const [ prosthesis, setProsthesis] = React.useState<Prosthesis>();

  React.useEffect(() => {
    (async() => {
      const res = await getProsthesis(isbn);
      setProsthesis(res)
    })()
  },[isbn])

  if(!prosthesis){
    return(
      <h1>Loading...</h1>
    )
  }else{
    return (
      <Container>
        <Info prosthesis={ prosthesis }/>
      </Container>
    )
  } 
}

export default ProsthesisDetail;