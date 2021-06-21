import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function Home(){
  // const [isbn, setIsbn] = React.useState<string>('');
  return (
    <Container>
      <Link to="/scannerpage">Scanner</Link>
      <br></br>
      <Link to="/barcode">Barcode</Link>

    </Container>
  )
}