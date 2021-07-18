import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Barcode from './pages/Barcode';

import Home from './pages/Home';
import ProsthesisDetail from './pages/ProsthesisDetail'
import Register from './pages/Register';
import Reports from './pages/Reports';
import ScannerPage from './pages/ScannerPage';

export default function Routes(){
  return(
    <BrowserRouter> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/scannerpage" component={ScannerPage}/>
        <Route path="/barcode" component={Barcode}/>
        <Route path="/prosthesis/:isbn" component={ProsthesisDetail}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  )
}