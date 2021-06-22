import React from 'react';
import JsBarcode from 'jsbarcode';
import api from '../../services/api';
import { handleNumber } from '../../utils/generateHandleNumber'
import { checksum } from '../../utils/generatecheckdigit'

interface I_encodings {
  
}
interface ICode {
  _encodings: [
    [
      data: string,
      text: string,
      height: number,

    ]
  ]
}

const Barcode: React.FC = () => {
  const [ isbn, setIsbn ] = React.useState('' as string)
  const [ name, setName ] = React.useState('' as string)
  const [ service, setService ] = React.useState('' as string)
  const [ dr, setDr ] = React.useState('' as string)


  const handleCodeBar = () => {

    const handle = handleNumber()

    JsBarcode('#barcode' , handle , {
      displayValue: true,
      text: name,
      format:'EAN13',
      width: 2,
      height:60,
      fontOptions: 'bold',
      textPosition: 'top',
      textAlign:'center',
      flat: true
    });
    setIsbn(`${handle}${checksum(handle)}`)
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
      <input type="text" placeholder="Nome paciente" value={name} onChange={e => setName(e.target.value)}/>
      <br></br>
      <select onChange={e => setDr(e.target.value)}>
        <option>Selecione o profissional</option>
        <option value="Dra Tatiana">Tatiana Galindo</option>
        <option value="Dr Lucas">Lucas Canto</option>
      </select>
      <br></br>
      <input type="text" placeholder="Serviço" value={service} onChange={e => setService(e.target.value)}/>
      <br></br>
      <button onClick={handleCodeBar} type="submit">Gerar código</button>
      <br></br>
      <button onClick={handleCreateProsthesis} type="submit">Print</button>
      <br></br>
      <svg id="barcode"></svg>
    </div>)
}

export default Barcode;