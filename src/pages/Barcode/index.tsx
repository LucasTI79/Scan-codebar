import React from 'react';
import JsBarcode from 'jsbarcode';
import { handleNumber } from '../../utils/generateHandleNumber';
import { checksum } from '../../utils/generatecheckdigit';
import { Container, SVGContainer} from './styles';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { getProfissional, IProfessional } from '../../services/profissional';
import apiLocal from '../../services/apiLocal';
import { getPatients, IPatient } from '../../services/patients';
import { getServices, IServices } from '../../services/services';
import { catchValue } from '../../utils/catchValueDataList';
import moment from 'moment';
import { validateForm } from '../../utils/ValidateForm';
import { getStatus, IStatus } from '../../services/status';

const Barcode: React.FC = () => {
  React.useEffect(() => {
    (async() => {
      const { data: dataProfessional } = await getProfissional();
      setDrs(dataProfessional)
      const { data: dataPatients } = await getPatients();
      setPatients(dataPatients)
      const { data: dataServices } = await getServices();
      setServices(dataServices)
      const { data: dataStatus } = await getStatus();
      setStatusData(dataStatus)
    })()
  },[])

  const [ drs, setDrs ] = React.useState<IProfessional[]>()
  const [ patients, setPatients ] = React.useState<IPatient[]>()
  const [ services, setServices ] = React.useState<IServices[]>([])
  const [ statusData , setStatusData ] = React.useState<IStatus[]>([])

  const [ isbn, setIsbn ] = React.useState<string>('')
  const [ patient, setPatient ] = React.useState<NamedNodeMap | undefined>()
  const [ service, setService ] = React.useState<NamedNodeMap | undefined>()
  const [ status, setStatus ] = React.useState<NamedNodeMap | undefined>()
  const [ dr, setDr ] = React.useState<NamedNodeMap | undefined>()
  const [ deliveryDate, setDeliveryDate ] = React.useState('' as string)

  const [ box, setBox ] = React.useState<string>()

  const generateBarCode = () => {
    const handle = handleNumber()
    JsBarcode('#barcode' , handle , {
      displayValue: true,
      //@ts-ignore
      text: patient["value"],
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

  const handleCodeBar = (e: any) => {
    e.preventDefault();
    validateForm();
    generateBarCode()
  }

  const print = (e: any) => {
    e.preventDefault();
    // const context: HTMLElement | null = document.getElementById('barcode')
    // const screen = window.open('about:blank') as Window;
    // screen.document.write(context?.outerHTML!)
    // screen.window.print()
    handleCreateProsthesis()
 //   screen.window.close()
    
  }

  const handleCreateProsthesis = async () => {
   
   const res = await apiLocal.post('prosthesis', { 
      isbn,//@ts-ignore
      patient: { id: patient.attributes["data-id"].value }, //@ts-ignore
      professional: { id: dr.attributes["data-id"].value },//@ts-ignore
      service: { id: service.attributes["data-id"].value },//@ts-ignore
      lab: { id: service.attributes["data-lab"].value },
      box,//@ts-ignore
      status: { id: status.attributes["data-id"].value },
      DeliveryDate: deliveryDate || null
    });

    if(res.status === 201) { 
      alert('barcode generate success') 
    }
  }
  
  return(
    <Container>
      <Link className="go-back" to="/">
        <MdArrowBack size={32} color={'#6976d9'}/>
      </Link>
      <main>
        <h1>Cadastrar código de barras</h1>
        <form id="frmbarcode">
          <label htmlFor="txtSendDate">Data de retorno</label>
          <input 
            type="date"
            name="Data"
            value={moment(new Date()).add(7,'days').format('YYYY-MM-DD')}
            onChange={e => setDeliveryDate(e.target.value)}
            />
      
          <label htmlFor="txtPatient">Paciente</label>
          
          <input 
            id="txtPatient" 
            list="dataPatient" 
            type="text"
            name="Paciente"
            onChange={() => catchValue("txtPatient","dataPatient", setPatient )}
            autoComplete={'off'}
            required
            />
  
          <datalist id="dataPatient">
            { //@ts-ignore
              patients && patients.map((item, i) =>
              <option key={i} data-id={item.id} value={item.name}/>
            )}
          </datalist>
          

          <label htmlFor="txtProfessional">Profissional</label>
          
          <input 
            id="txtProfessional" 
            list="dataProfessional"
            name="Profissional" 
            type="text"
            onChange={() => catchValue("txtProfessional","dataProfessional", setDr )} 
            autoComplete={'off'}
            />

          <datalist id="dataProfessional">
            { //@ts-ignore
              drs && drs.map((item, i) =>
              <option key={i} data-id={item.id} value={item.name}/>
              )}
          </datalist>
     
          <label htmlFor="txtService">Serviço</label>
          <input 
            id="txtService" 
            list="dataServices" 
            name="Serviço" 
            type="text" 
            onChange={() => catchValue("txtService","dataServices", setService )}
            autoComplete={'off'}
            />

          <datalist id="dataServices">
            { //@ts-ignore
              services && services.map((item, i) =>
              <option key={i} data-id={item.id} data-lab={item.lab.id} value={item.name} />
            )}
          </datalist>

          <label htmlFor="txtStatus">Status</label>
          <input 
            id="txtStatus" 
            list="dataStatus" 
            name="Status" 
            type="text" 
            onChange={() => catchValue("txtStatus","dataStatus", setStatus )}
            autoComplete={'off'}
            />

          <datalist id="dataStatus">
            { //@ts-ignore
              statusData && statusData.map((item, i) =>
              <option key={i} data-id={item.id} value={item.name} />
            )}
          </datalist>

          <label>Box</label>
          <input 
            type="text"
            name="Box" 
            onChange={(e) => setBox(e.target.value)}
          />

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