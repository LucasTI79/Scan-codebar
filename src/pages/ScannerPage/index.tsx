import React from 'react';
import Scanner from '../../components/Scanner';
import Result from '../../components/Result';
import { Container } from './styles';

export default function ScannerPage(){
  const [isbn, setIsbn] = React.useState('' as string)
  return (
    <Container>
      <Scanner onScan={setIsbn}/>
      <Result isbn={isbn}/>
    </Container>
  )
}