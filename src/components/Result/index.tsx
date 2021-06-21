import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Wrapper, Info, ActionButtons } from './styles'

import { getProsthesis } from '../../services/prosthesis';

interface Props {
  isbn: string
}

interface Prosthesis {
  isbn: string;
  name: string;
  service: string;
  dr: string;
  date: string;
}

const Result: React.FC<Props> = ({ isbn }) => {
  const [ prosthesis , setProsthesis] = React.useState<Prosthesis | undefined>();
  React.useEffect(() => {
    (async() => {
      const res = await getProsthesis(isbn) as Prosthesis;
      setProsthesis(res)
    })()
  },[isbn])

  return(
    <Container>
      { prosthesis && (
        <Link to={`/product/${isbn}`}>
          <Wrapper>
            <Info>
              <p className="name"><b>Profissional:</b> {prosthesis.dr}</p>
              <p className="name"><b>Paciente:</b> {prosthesis.name}</p>
              <p className="name"><b>Data:</b> {prosthesis.date}</p>
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