import React from 'react';
import { Container, Wrapper } from './styles';
import Sidebar from '../../components/Sidebar';

export default function Home(){
  return (
    <Container>
      <Sidebar />
      <main>
        <h1>Teste</h1>
      </main>
    </Container>
  )
}