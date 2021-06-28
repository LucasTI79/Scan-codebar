import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container } from './styles'

const Reports: React.FC = () => {
  return (
    <Container>
      <Link className="go-back" to="/">
        <MdArrowBack size={32} color={'#6976d9'}/>
      </Link>
      <main>
        <div>
        </div>
      </main>
    </Container>
  )
}

export default Reports;