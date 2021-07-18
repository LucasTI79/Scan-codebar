import React from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { validateForm } from '../../../utils/ValidateForm';
import { Container } from './styles';
import { ContainerContent } from '../styles'
import { getPatients, IPatient } from '../../../services/patients';
import Modal from '../../../components/Modal';
import { debounce } from 'underscore';

export default function Patient(){
  const nameRef = React.useRef<HTMLInputElement>(null)
  const rgRef = React.useRef<HTMLInputElement>(null)
  const cpfRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const phoneRef = React.useRef<HTMLInputElement>(null)
  const birthdayRef = React.useRef<HTMLInputElement>(null)
  const genderRef = React.useRef<HTMLInputElement>(null)

  const [ isModalVisible, setIsModalVisible ] = React.useState<boolean>(false)
  const [ patients, setPatients ] = React.useState<IPatient[]>([])
  const [ patient, setPatient ] = React.useState<string>('')

  const catchPatients = async() => {
    const patientsData = await getPatients()
    setPatients(patientsData.data)
    console.log(patientsData.data)
  }

  const handleSearchPatients = (e: any) => {
    debounce(catchPatients, 1000)
  }

  function handlePlan(e: any){
    e.preventDefault()
    validateForm() 
  }
  return (
    <Container>
      <button 
            onClick={() => setIsModalVisible(true)} 
            className='plus'
            >
              Novo Paciente
              <IoAddOutline size={18} color={'#fff'}/>
          </button>
        
          <ContainerContent>
            <label htmlFor="txtPatient">Paciente</label>
            
            <input 
              id="txtPatient" 
              list="dataPatient" 
              type="text"
              name="Paciente"
              onChange={() => debounce(catchPatients, 1000)()}
              autoComplete={'off'}
              required
              />
    
            <datalist id="dataPatient">
              { //@ts-ignore
                patients && patients.map((item, i) =>
                <option key={i} data-id={item.id} value={item.name}/>
              )}
            </datalist>
         </ContainerContent>
         {isModalVisible && ( 
            <Modal id="PatientModal" title="Novo Paciente" onSubmit={function(){}} onClose={() => setIsModalVisible(prevstate => !prevstate)} >
              <form id="frmplans">
                  <div className="groupInput">
                    <label htmlFor="txtName">Nome Paciente</label>
                    <input 
                      id="txtName"
                      type="text"
                      name="paciente"
                      ref={nameRef}
                      autoComplete={'off'}
                      />
                  </div>
                  

                  <div className="groupInput">
                    <label htmlFor="txtRG">RG</label>
                    <input 
                      id="txtRG"
                      type="text"
                      name="RG"
                      ref={rgRef}
                      autoComplete={'off'}
                      />

                    <label htmlFor="txtCPF">CPF</label>
                    <input 
                      id="txtCPF"
                      type="text"
                      name="CPF"
                      ref={cpfRef}
                      autoComplete={'off'}
                      />
                  </div>
                  

                  <label htmlFor="txtEmail">email</label>
                  <input 
                    id="txtEmail"
                    type="email"
                    name="email"
                    ref={emailRef}
                    autoComplete={'off'}
                    />

                  <label htmlFor="txtPhone">Telefone</label>
                  <input 
                    id="txtPhone"
                    type="tel"
                    name="telefone"
                    ref={phoneRef}
                    autoComplete={'off'}
                    />

                  <label htmlFor="txtBirthday">Data de nascimento</label>
                  <input 
                    id="txtBirthday"
                    type="date"
                    name="nascimento"
                    ref={birthdayRef}
                    />

              </form>
            </Modal>
          )} 
    </Container>
  )
}