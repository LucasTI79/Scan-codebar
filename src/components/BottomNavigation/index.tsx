import React from 'react';
import { Wrapper, Container } from './styles';
import { Link } from 'react-router-dom';

const BottomNavigation: React.FC = (props) => {
  return (
    <Container className="bottombar">
      <Wrapper>
        <Link className="link-container" to="/barcode">
          <p>image</p>
          <p>barcode</p>
        </Link>
        <Link className="link-container" to="/scannerpage">
          <p>image</p>
          <p>Scanner</p>   
        </Link>
      </Wrapper>
    </Container>
  )
}

export default BottomNavigation;