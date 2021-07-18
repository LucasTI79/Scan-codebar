import React from 'react';
import { IoAddOutline } from 'react-icons/io5';
import Modal from '../../../components/Modal';
import { getPlans, IPlans, registerPlan } from '../../../services/plans';
import { validateForm } from '../../../utils/ValidateForm';
import { ContainerContent } from '../styles';
import { Container } from './styles';

export default function Plans(){
  const [ isModalVisible, setIsModalVisible ] = React.useState<boolean>(false)
  const [ plans, setPlans ] = React.useState<IPlans[]>([])

  React.useEffect(() => {
    (async ()=> {
      const plansData = await getPlans();
      setPlans(plansData.data)
    })();
  },[])

  const nameRef = React.useRef<HTMLInputElement>(null)
  async function handlePlan(e: any){
    e.preventDefault()
    validateForm()
    //@ts-ignore
    const res = await registerPlan(nameRef?.current?.value , true)
    if(res.status === 200){
      setIsModalVisible(prevstate => !prevstate)
      alert('Plan created')
      setPlans(prevstate => [...prevstate, res.data])
    }
  }
  return (
    <Container>
      <button 
            onClick={() => setIsModalVisible(true)} 
            className='plus'
            >
              Novo Plano
              <IoAddOutline size={18} color={'#fff'}/>
          </button>
        
          <ContainerContent>
          { plans && plans.map(plan => (
              <div key={plan.id} className='content'>
                <div>{plan.name}</div>
                <div className='actions'>
                  <button className="delete"> Excluir </button>
                  <button> Editar </button>
                </div>
                
              </div>
          ))}
         </ContainerContent>
         {isModalVisible && ( 
            <Modal id="PlanModal" title="Novo Plano" onSubmit={(e) => handlePlan(e)} onClose={() => setIsModalVisible(prevstate => !prevstate)} >
              <form id="frmplans">
                <label htmlFor="txtPlan">Nome Plano</label>
                <input 
                  id="txtPlan"
                  type="text"
                  name="plano"
                  ref={nameRef}
                  autoComplete={'off'}
                  pattern=".+"
                  required
                  />
              </form> 
            </Modal>
          )} 
    </Container>
  )
}