import React from 'react';
import { Wrapper, Container } from './styles';
import { Link } from 'react-router-dom';
import { IoIosQrScanner, IoMdBarcode, IoIosStats, IoMdAddCircleOutline } from 'react-icons/io'

const BottomNavigation: React.FC = (props) => {
  return (
    <Container className="bottombar">
      <Wrapper>
        <Link className="link-container" to="/barcode">
          <IoMdBarcode size={32} />
          <p>barcode</p>
        </Link>
        <Link className="link-container" to="/scannerpage">
          <IoIosQrScanner size={32} />
          <p>Scanner</p>   
        </Link>
        <Link className="link-container" to="/reports">
          <IoIosStats size={32} />
          <p>Reports</p>   
        </Link>
        <Link className="link-container" to="/register">
          <IoMdAddCircleOutline size={32} />
          <p>Register</p>   
        </Link>
      </Wrapper>
    </Container>
  )
}

export default BottomNavigation;