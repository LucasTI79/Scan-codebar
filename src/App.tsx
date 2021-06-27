import React from 'react';
import Routes from './routes';
import { GlobalStyles } from './styles/global'
import moment from 'moment'

function App() {
  moment.locale('pt-br')
  return (
    <>
      <GlobalStyles/>
      <Routes />
    </>
  )
}

export default App;
