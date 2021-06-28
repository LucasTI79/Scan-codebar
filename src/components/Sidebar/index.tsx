import React from 'react';
import { IoIosQrScanner, IoMdBarcode, IoIosStats } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { Aside } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Aside className="sidebar">
      <nav>
        <ul>
          <Link to={'/barcode'}>
            <IoMdBarcode size={20} />
            Barcode
          </Link>
        
          <Link to={'/scannerpage'}>
            <IoIosQrScanner size={20} />
            Scanner
          </Link>

          <Link to={'/reports'}>
            <IoIosStats size={20} />
            Stats
          </Link>
        </ul>
      </nav>
    </Aside>
  )
}

export default Sidebar;