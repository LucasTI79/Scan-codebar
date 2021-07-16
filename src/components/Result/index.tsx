import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Info, ActionButtons } from './styles'
import { getProsthesis } from '../../services/prosthesis';

interface Props {
  isbn: string
}

const Result: React.FC<Props> = ({ isbn }) => {
  const [ prosthesis, setProsthesis ] = React.useState<any>();
  React.useLayoutEffect(() => {
    (async() => {
      const res = await getProsthesis(isbn);
      console.log('res.data', res.data)
      setProsthesis(res.data);
    })()
  },[isbn])

  return(
    <Container>
      { prosthesis && (
        <Link to={`/prosthesis/${prosthesis.isbn}`}>
          <Wrapper>
            <Info>
              {/* <p className="name"><b>Enviado:</b> {prosthesis.createdAt}</p>
              <p className="name"><b>Profissional:</b> {prosthesis.professional}</p>
              <p className="name"><b>Paciente:</b> {prosthesis.patient.name}</p>
              <p className="name"><b>Retorno:</b> {prosthesis.DeliveryDate}</p> */}
              <p>{//@ts-ignore
                prosthesis.name
              }</p>
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