import React from 'react';
import { Container, Wrapper } from './styles';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';

export default function Home(){
  return (
      <Container>
        <Sidebar />
        <Wrapper>
            <h1>Teste</h1>
          <BottomNavigation />
        </Wrapper>
      </Container>
  )
}