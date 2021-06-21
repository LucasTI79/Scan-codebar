import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Barcode from './pages/Barcode';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail'
import ScannerPage from './pages/ScannerPage';

export default function Routes(){
  return(
    <BrowserRouter> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/scannerpage" component={ScannerPage}/>
        <Route path="/barcode" component={Barcode}/>
        <Route path="/product/:isbn" component={ProductDetail}/>
      </Switch>
    </BrowserRouter>
  )
}