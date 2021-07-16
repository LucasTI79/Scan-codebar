import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { Wrapper } from './styles';
import { changeStatus, IProsthesis }  from '../../../services/prosthesis';
import { getStatus, IStatus } from '../../../services/status';
import { getProfissional, IProfessional } from '../../../services/profissional';
import { catchValue } from '../../../utils/catchValueDataList';
interface Props {
  prosthesis: IProsthesis[];
}

const Info: React.FC<Props> = ({ prosthesis }) => {
  React.useEffect(() => {
    (async () => {
      const statusResponse = await getStatus();
      setStatusData(statusResponse.data)
      const professionalResponse = await getProfissional();
      setProfessional(professionalResponse.data)
    })()
  },[])

  const history = useHistory();
  const [ status, setStatus ] = React.useState('')
  const [ statusData, setStatusData ] = React.useState<IStatus[]>()
  const [ professional, setProfessional ] = React.useState<IProfessional[]>()

  const handleChangeStatus = async (status: string) => {
    if(!status) return alert('Selecione um novo status para o serviço')
    const newProsthesis = prosthesis[0]
    //@ts-ignore
    delete newProsthesis.status.name
    //@ts-ignore
    delete newProsthesis.status.createdAt
    //@ts-ignore
    delete newProsthesis.status.updatedAt
    newProsthesis.status.id = status
    const res = await changeStatus(newProsthesis.isbn, newProsthesis)
    if(res.status === 200){
      alert('Status alterado com sucesso')
      history.push('/')
    }
  }
  
  return(
    <Wrapper>
      <Link className="go-back" to="/">
        <MdArrowBack size={32} color={'#6976d9'}/>
      </Link>
     
      <div className="container">
        <h2 className="title">Prótese</h2>
        {/* <p><b>Data do registro:</b> {moment(prosthesis[0].createdAt).format('LLL')}</p>
        <p><b>Serviço:</b> {prosthesis[0].service.name}</p>
        <p><b>Status Atual:</b> {prosthesis[0].status.name}</p> */}
        <div>
          <label htmlFor="txtSendDate">Data do registro</label>
            
          <input 
            id="txtSendDate" 
            type='date'
            value={moment(prosthesis[0].createdAt).format('YYYY-MM-DD')}
            readOnly
            />
        </div>
        <div>
          <label htmlFor="txtProfessional">Professional</label>
            
          <input 
            id="txtProfessional" 
            list="dataProfessional" 
            autoComplete={'off'}
            onChange={() => catchValue("txtProfessional","dataProfessional", setProfessional )}
            value={prosthesis[0].professional.name}
            />
  
          <datalist id="dataProfessional">
          
            { //@ts-ignore
              professional && professional.map((item, i) => (
                <option 
                key={i} 
                data-id={item.id} 
                value={item.name}
                />
              )
            )}
          </datalist>
        </div>
        <div>
          <label htmlFor="txtPatient">Paciente</label>
            
          <input 
            id="txtPatient" 
            value={prosthesis[0].patient.name}
            readOnly
            />
        </div>
        <div>
          <label htmlFor="txtBox">Box</label>
            
          <input 
            id="txtBox" 
            value={prosthesis[0].box}
            readOnly
            />
        </div>
        <div>
          <label htmlFor="txtStatusAtt">Status</label>
            
          <input 
            id="txtStatusAtt" 
            value={prosthesis[0].status.name}
            readOnly
            />
        </div>

        <label htmlFor='cboStatus'><b>Novo Status</b></label>
        <select id="cboStatus" onChange={(value) => setStatus(value.currentTarget.value)}>
          { statusData && statusData.map(status => (
            <option key={status.id} value={status.id}>{status.name}</option>
          )) }          
        </select>
       <button className="submitButton" onClick={() => handleChangeStatus(status)}>Mudar status do trabalho</button>
      </div>
      
    </Wrapper>
  )
}

export default Info;