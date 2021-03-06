import React from 'react';
import Scanner from '../../components/Scanner';
import Result from '../../components/Result';
import { Container } from './styles';

export default function ScannerPage(){
  const [isbn, setIsbn] = React.useState<string>()
  return ( 
    <Container>
      <Scanner onScan={setIsbn}/>
      {isbn && <Result isbn={isbn}/>}
    </Container>   
  )
}