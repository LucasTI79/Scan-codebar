import React from 'react';
import JsBarcode from 'jsbarcode';
import api from '../../services/api';

const Barcode: React.FC = () => {
  const [ name, setName ] = React.useState('' as string)
  const [ service, setService ] = React.useState('' as string)
  const [ dr, setDr ] = React.useState('' as string)

 const handleNumber = (number = 9) => {
  let isbn = ''
  for(let i = 0; i <= number - 1; i++){
    isbn += String(Math.floor(Math.random() * 10))
  }
  return `978${isbn}`;
}
  const handleCodeBar = () => {

    const jsbar = JsBarcode('#barcode' , handleNumber() , {
      text: name,
      format:'EAN13',
      width: 2,
      height:60,
      fontOptions: 'bold',
      textPosition: 'top',
      textAlign:'center',
      flat: true
    });

    api.post('prosthesis', { 
      isbn: jsbar._encodings[0][0].text,
      name,
      dr,
      service
    });

  }

  const print = () => {
    const context: HTMLElement | null = document.getElementById('barcode')
    const screen = window.open('about:blank') as Window;
    screen.document.write(context?.outerHTML!)
    screen.window.print()
    screen.window.close()
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
      <button onClick={print} type="submit">Print</button>
      <br></br>
      <svg id="barcode"></svg>
    </div>)
}

export default Barcode;