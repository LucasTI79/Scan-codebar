import React from 'react';
import JsBarcode from 'jsbarcode';
import api from '../../services/api';
interface prosthesis {
  number: string,
  name: string,
  dr: string,
  service: string
}

const Barcode: React.FC = () => {
  const [ isbn, setIsbn ] = React.useState('' as string)
  const [ name, setName ] = React.useState('' as string)
  const [ service, setService ] = React.useState('' as string)
  const [ dr, setDr ] = React.useState('' as string)

  const handleNumber = (digit = 9) => {
    let isbn = ''
    for(let i = 0; i <= digit - 1; i++){
      isbn += String(Math.floor(Math.random() * 10))
    }
    const number = `978${isbn}`;
    setIsbn(number)
    return number
  }

  const handleCodeBar = () => {

    JsBarcode('#barcode' , handleNumber() , {
      text: name,
      format:'EAN13',
      width: 2,
      height:60,
      fontOptions: 'bold',
      textPosition: 'top',
      textAlign:'center',
      flat: true
    });

  }

  const print = () => {
    const context: HTMLElement | null = document.getElementById('barcode')
    const screen = window.open('about:blank') as Window;
    screen.window.onafterprint = function(){handleCreateProsthesis()};
    screen.document.write(context?.outerHTML!)
    screen.window.print()
    handleCreateProsthesis()
    screen.window.close()
    
  }

  const handleCreateProsthesis = () => {
    alert('afterprint')
    console.log('afterprint')
    api.post('prosthesis', { 
      isbn,
      name,
      dr,
      service
    });
  }
  
  return(
    <div>
      <h1>Cadastrar código de barras</h1>
      <br></br>
      <input type="text" placeholder="Nome paciente" onChange={e => setName(e.target.value)}/>
      <br></br>
      <select onChange={e => setDr(e.target.value)}>
        <option>Selecione o profissional</option>
        <option value="Dra Tatiana">Tatiana Galindo</option>
        <option value="Dr Lucas">Lucas Canto</option>
      </select>
      <br></br>
      <input type="text" placeholder="Serviço" onChange={e => setService(e.target.value)}/>
      <br></br>
      <button onClick={handleCodeBar} type="submit">Gerar código</button>
      <br></br>
      <button onClick={handleCreateProsthesis} type="submit">Print</button>
      <br></br>
      <svg id="barcode"></svg>
    </div>)
}

export default Barcode;