import React from 'react';

import { getProsthesis, IProsthesis } from '../../services/prosthesis'

import { Container } from './styles';

import { useParams } from 'react-router-dom';

import Info from './Info'

interface Params {
  isbn: string;
}

const ProsthesisDetail: React.FC = () => {
  const { isbn } = useParams<Params>();
  const [ prosthesis, setProsthesis ] = React.useState<IProsthesis[]>();

  React.useEffect(() => {
    (async() => {
      const res = await getProsthesis(isbn);
      setProsthesis([res.data])
    })()
  },[isbn])

  if(!prosthesis){
    return(
      <h1>Loading...</h1>
    )
  }else{
    return (
      <Container>
        {/* //@ts-ignore */}
        <Info prosthesis={ prosthesis }/>
      </Container>
    )
  } 
}

export default ProsthesisDetail;