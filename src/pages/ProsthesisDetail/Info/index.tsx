import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { Wrapper } from './styles';
import { changeStatus, IProsthesis }  from '../../../services/prosthesis';
interface Props {
  prosthesis: IProsthesis[];
}

const Info: React.FC<Props> = ({ prosthesis }) => {
  console.log('prosthesisInfo', prosthesis)
  const history = useHistory();

  const [ status, setStatus ] = React.useState('')

  const handleChangeStatus = async (status: string) => {
    if(!status) return alert('Selecione um novo status para o serviço')
    const res = await changeStatus(prosthesis[0].isbn, status)
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
        <br></br>
        <p className="name"><b>Data de envio:</b> {moment(prosthesis[0].createdAt).format('LLL')}</p>
        <p className="name"><b>Profissional:</b> {prosthesis[0].professional.name}</p>
        <p className="name"><b>Paciente:</b> {prosthesis[0].patient.name}</p>
        <p className="name"><b>Serviço:</b> {prosthesis[0].service.name}</p>
        <p className="name"><b>Status Atual:</b> {prosthesis[0].status.name}</p>

        <label htmlFor='cboStatus'><b>Novo Status</b></label>
        <select id="cboStatus" onChange={(value) => setStatus(value.currentTarget.value)}>
          <option defaultChecked>Selecione o novo status</option>
          <option value="Enviado">Enviado para o laboratório</option>
          <option value="Chegou">Chegou do laboratório</option>
          <option value="Finalizado">Finalizado</option>
        </select>
       <button className="submitButton" onClick={() => handleChangeStatus(status)}>Mudar status do trabalho</button>
      </div>
      
    </Wrapper>
  )
}

export default Info;