import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Wrapper } from './styles';
import { changeStatus }  from '../../../services/prosthesis';
interface Prosthesis {
  isbn: string;
  name: string;
  service: string;
  dr: string;
  status: string;
  createdAt: string;
}

interface Props {
  prosthesis: Prosthesis;
}

const Info: React.FC<Props> = ({ prosthesis }) => {
  const history = useHistory();

  const [ status, setStatus ] = React.useState('')
  const [ redirect, setRedirect ] = React.useState(false);

  const handleChangeStatus = async (status: string) => {
    if(!status) return alert('Selecione um novo status para o serviço')
    const res = await changeStatus(prosthesis.isbn, status)
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
        <p className="name"><b>Data de envio:</b> {moment(prosthesis.createdAt).format('LLL')}</p>
        <p className="name"><b>Profissional:</b> {prosthesis.dr}</p>
        <p className="name"><b>Paciente:</b> {prosthesis.name}</p>
        <p className="name"><b>Serviço:</b> {prosthesis.service}</p>
        <p className="name"><b>Status Atual:</b> {prosthesis.status}</p>

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