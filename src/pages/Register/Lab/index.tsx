import React from 'react';
import { IoAddOutline } from 'react-icons/io5';
import Modal from '../../../components/Modal';
import { getLabs, ILabs, registerLabs } from '../../../services/labs';
import { validateForm } from '../../../utils/ValidateForm';
import { ContainerContent } from '../styles';
import { Container } from './styles';

export default function Lab(){
  const [ isModalVisible, setIsModalVisible ] = React.useState<boolean>(false)
  const [ labs, setLabs ] = React.useState<ILabs[]>([])

  React.useEffect(() => {
    (async ()=> {
      const labsData = await getLabs();
      setLabs(labsData.data)
    })();
  },[])

  const labRef = React.useRef<HTMLInputElement>(null)
  async function handleLab(e: any){
    e.preventDefault()
    validateForm()
    //@ts-ignore
    const res = await registerLabs(labRef?.current?.value , true)
    if(res.status === 200){
      setIsModalVisible(prevstate => !prevstate)
      alert('Lab created')
      setLabs(prevstate => [...prevstate, res.data])
    }
  }
  return (
    <Container>
      <button 
            onClick={() => setIsModalVisible(true)} 
            className='plus'
            >
              Novo Laboratório
              <IoAddOutline size={18} color={'#fff'}/>
          </button>
        
          <ContainerContent>
          { labs && labs.map(labs => (
              <div key={labs.id} className='content'>
                <div>{labs.name}</div>
                <div className='actions'>
                  <button className="delete"> Excluir </button>
                  <button> Editar </button>
                </div>
                
              </div>
          ))}
         </ContainerContent>
         {isModalVisible && ( 
            <Modal id="LabModal" title="Novo Laboratório" onSubmit={(e) => handleLab(e)} onClose={() => setIsModalVisible(prevstate => !prevstate)} >
              <form id="frmplans">
                <label htmlFor="txtLab">Nome Laboratório</label>
                <input 
                  id="txtLab"
                  type="text"
                  name="lab"
                  ref={labRef}
                  autoComplete={'off'}
                  />
              </form>  
            </Modal>
          )} 
      
    </Container>
  )
}