import React from 'react';
import { Link } from 'react-router-dom';

import { Aside } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Aside className="sidebar">
      <nav>
        <ul>
          <Link to={'/barcode'}>
            Protéses
          </Link>
        
          <Link to={'/scannerpage'}>
            Scanner
          </Link>
        </ul>
      </nav>
    </Aside>
  )
}

export default Sidebar;