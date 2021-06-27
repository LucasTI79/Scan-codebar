import React from 'react';
import JsBarcode from 'jsbarcode';
import apiLocal from '../../services/apiLocal';
import apiSimples from '../../services/apiSimples'
import { handleNumber } from '../../utils/generateHandleNumber';
import { checksum } from '../../utils/generatecheckdigit';
import { Container, SVGContainer} from './styles';
import Sidebar from '../../components/Sidebar';

const Barcode: React.FC = () => {
  const [ isbn, setIsbn ] = React.useState('' as string)
  const [ name, setName ] = React.useState('' as string)
  const [ service, setService ] = React.useState('' as string)
  const [ dr, setDr ] = React.useState('' as string)
  const [ sendDate, setSendDate ] = React.useState('' as string)

  const [ patients, setPatients ] = React.useState([{name: String}])

  React.useEffect(() => {
    apiSimples.get(`pacientes?q=${'23285763892'}`, { 
      headers:{
        'X-AUTH-TOKEN':'ZGqeHEsCUwcUmmA4FvxM8oUQ2B3I8fN0h0zPvf2KPR46pbRAha3z2UIw3PTMI8cj'
     }}).then(r => console.log('r', r.data))
  })

  const handleCodeBar = (e: any) => {
    e.preventDefault();
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

  const print = (e: any) => {
    e.preventDefault();
    const context: HTMLElement | null = document.getElementById('barcode')
    const screen = window.open('about:blank') as Window;
    screen.window.onafterprint = function(){handleCreateProsthesis()};
    screen.document.write(context?.outerHTML!)
    screen.window.print()
    handleCreateProsthesis()
    screen.window.close()
    
  }

  const handleCreateProsthesis = () => {
    apiLocal.post('prosthesis', { 
      isbn,
      name,
      dr,
      service
    });
  }
  
  return(
    <Container>
      <Sidebar />
      <main>
        <h1>Cadastrar código de barras</h1>
        <form >
          <label htmlFor="txtSendDate">Data de envio</label>
          <input type="date" onChange={newDate => setSendDate(String(newDate))}/>

          <div>
            <label htmlFor="txtPatient">Paciente</label>
            <input id="txtPatient" autoComplete={'off'} className="input" type="text" onChange={e => setName(e.target.value)}/>
           
            { patients && (
              <ul>
                { patients.map(patient => {
                  <li>
                    { patient.name }
                  </li>
                })}
              </ul>
            )}

          </div>

          <label htmlFor="cboProfessional">Profissional</label>
          <select id="cboProfessional" onChange={e => setDr(e.target.value)}>
            <option>Selecione o profissional</option>
            <option value="Dra Tatiana">Tatiana Galindo</option>
            <option value="Dr Lucas">Lucas Canto</option>
          </select>
     
          <label htmlFor="txtService">Serviço</label>
          <input id="txtService" className="input" type="text" onChange={e => setService(e.target.value)}/>

          <button onClick={e => handleCodeBar(e)} className="submitButton" type="submit">Gerar código</button>
          <button onClick={e => print(e)} className="submitButton" type="submit">Print</button>
          <SVGContainer>
           <svg id="barcode"></svg> 
          </SVGContainer>
      
        </form>
      </main>
    </Container>
  )
}

export default Barcode;