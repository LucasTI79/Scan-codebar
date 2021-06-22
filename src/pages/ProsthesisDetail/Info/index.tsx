import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Wrapper } from './styles';

interface Prosthesis {
  isbn: string;
  name: string;
  service: string;
  dr: string;
  date: string;
}

interface Props {
  prosthesis: Prosthesis;
}

const Info: React.FC<Props> = ({ prosthesis }) => {
  return(
    <Wrapper>
      <Link className="go-back" to="/">
        <MdArrowBack size={32} color={'#2ecc71'}/>
      </Link>
      <br></br>
      <h3 className="title">Protéses</h3>
      <br></br>
      <p className="name"><b>Código:</b> {prosthesis.isbn}</p>
      <p className="name"><b>Data:</b> {prosthesis.date}</p>
      <p className="name"><b>Profissional:</b> {prosthesis.dr}</p>
      <p className="name"><b>Name:</b> {prosthesis.name}</p>
      <p className="name"><b>Serviço:</b> {prosthesis.service}</p>
    </Wrapper>
  )
}

export default Info;