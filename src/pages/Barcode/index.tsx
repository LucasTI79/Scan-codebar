import React from 'react';
import JsBarcode from 'jsbarcode';
import { createCanvas } from 'canvas';

const Barcode: React.FC = () => {

  const [ text, setText ] = React.useState('' as string)

 const handleNumber = (number = 9) => {
  let isbn = ''
  for(let i = 0; i <= number - 1; i++){
    isbn += String(Math.floor(Math.random() * 10))
  }
  return `978${isbn}`;
}
  const handleCodeBar = () => {
    JsBarcode('#barcode' , handleNumber() , {
        text: text,
        format:'EAN13',
        width: 2,
        fontOptions: 'bold',
        textPosition: 'top',
        alignAlign:'center'
      })
  }

  const print = () => {
    const context = document.getElementById('barcode').outerHTML
    const screen = window.open('about:blank');
    screen.document.write(context)
    screen.window.print()
    screen.window.close()
  }
  
  return(
    <div>
      Hello
      <input type="text" onChange={e => setText(e.target.value)}/>
      <button onClick={handleCodeBar} type="submit">Gerar código</button>
      <button onClick={print} type="submit">Print</button>
      <svg id="barcode"></svg>
    </div>)
}

export default Barcode;