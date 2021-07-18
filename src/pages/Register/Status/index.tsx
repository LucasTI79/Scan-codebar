import React from 'react';
import { validateForm } from '../../../utils/ValidateForm';
import { Container } from './styles';
import { ContainerContent } from '../styles'
import Modal from '../../../components/Modal';
import { IoAddOutline } from 'react-icons/io5';
import { deleteStatus, getStatus, IStatus, registerStatus } from '../../../services/status';

const Status: React.FC = () => {
  const [ isModalVisible, setIsModalVisible ] = React.useState<boolean>(false)
  const [ status, setStatus ] = React.useState<IStatus[]>([])

  React.useEffect(() => {
    (async ()=> {
      const statusData = await getStatus();
      setStatus(statusData.data)
    })();
  },[])

  const statusRef = React.useRef<HTMLInputElement>(null)
  async function handleStatus(e: any){
    e.preventDefault()
    validateForm()
    //@ts-ignore
    const res = await registerStatus(statusRef?.current?.value , true)
    if(res.status === 200){
      setIsModalVisible(prevstate => !prevstate)
      alert('Status created')
      setStatus(prevstate => [...prevstate, res.data])
    }
  }

  async function handleDelete(id: string) {
    await deleteStatus(id);
    alert('Status deleted')
    setStatus(prevstate => prevstate.filter(status => status.id !== id))
  }
 
  return (
    <Container>
      <button 
        onClick={() => setIsModalVisible(true)} 
        className='plus'
        >
          Novo Status
          <IoAddOutline size={18} color={'#fff'}/>
      </button>
        
      <ContainerContent>
      { status && status.map(status => (
          <div key={status.id} className='content'>
            <div>{status.name}</div>
            <div className='actions'>
              <button className="delete" onClick={() => handleDelete(status.id)}> Excluir </button>
              <button> Editar </button>
            </div>            
          </div>
      ))}
      </ContainerContent>
      {isModalVisible && ( 
        <Modal id="StatusModal" title="Novo Status" onSubmit={(e) => handleStatus(e)} onClose={() => setIsModalVisible(prevstate => !prevstate)} >
           <form id="frmplans">
            <label htmlFor="txtPlan">Nome Status</label>
            <input 
              id="txtStatus"
              type="text"
              name="status"
              ref={statusRef}
              autoComplete={'off'}
              />
          </form>
        </Modal>
      )} 
   
    </Container>
  )
}

export default Status;