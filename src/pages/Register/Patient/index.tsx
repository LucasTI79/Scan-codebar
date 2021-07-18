import React from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { validateForm } from '../../../utils/ValidateForm';
import { Container } from './styles';
import {  IPatient, registerPatient, searchPatient } from '../../../services/patients';
import Modal from '../../../components/Modal';
import { debounce } from 'underscore';
import { getPlans, IPlans } from '../../../services/plans';
import { catchValue } from '../../../utils/catchValueDataList';

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
  const [ plans, setPlans ] = React.useState<IPlans[]>([])
  const [ plan, setPlan ] = React.useState<string>('')


  const catchPatients = async() => {
    //@ts-ignore
    const patientsData = await searchPatient(nameRef.current?.value);
    setPatients(patientsData.data);
  }

  const db = debounce(catchPatients, 1000);

  const handleSearchPatients = async () => {
    await db()
  }

  React.useEffect(() => {
    (async ()=> {
      const plansData = await getPlans();
      setPlans(plansData.data)
    })();
  },[])

  async function handlePatient(e: any){
    e.preventDefault()
    validateForm()
    //@ts-ignore
    // console.log(nameRef?.current?.value, rgRef?.current?.value, cpfRef.current?.value , emailRef.current?.value, phoneRef.current?.value, birthdayRef.current?.value, genderRef.current?.value, plan.attributes["data-id"].value )
    //@ts-ignore
    const res = await registerPatient({ name: nameRef?.current?.value, RG: rgRef?.current?.value, CPF: cpfRef.current?.value , email: emailRef.current?.value, phone: phoneRef.current?.value, birthday: birthdayRef.current?.value, gender: genderRef.current?.value, plan : { id : plan.attributes["data-id"].value}})
    console.log('res',res)
    if(res.status === 200){
      setIsModalVisible(prevstate => !prevstate)
      alert('Patient created')
    }
  }

  return (
    <Container>
      <button 
        onClick={() => setIsModalVisible(true)} 
        className='plus'
        >
          Cadastrar paciente
          <IoAddOutline size={18} color={'#fff'}/>
      </button>
    
      <div className="containerinputs">
        <label htmlFor="txtPatient">Paciente</label>
        
        <input 
          id="txtPatient" 
          list="dataPatient" 
          type="text"
          name="Paciente"
          onChange={() => handleSearchPatients()}
          ref={nameRef}
          placeholder="Buscar paciente"
          autoComplete={'off'}
          required
          />

        <datalist id="dataPatient">
          { //@ts-ignore
            patients && patients.map((item, i) =>
            <option key={i} data-id={item.id} value={item.name}/>
          )}
        </datalist>
      </div>
      {isModalVisible && ( 
        <Modal id="PatientModal" title="Novo Paciente" onSubmit={(e) => handlePatient(e)} onClose={() => setIsModalVisible(prevstate => !prevstate)} >
          <form id="frmplans">
            <div className="containerinputs">
              <label htmlFor="txtName">Nome Paciente</label>
              <input 
                id="txtName"
                type="text"
                name="paciente"
                ref={nameRef}
                autoComplete={'off'}
                />
            

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

              <label htmlFor="txtGender">Sexo</label>
              <input 
                id="txtGender"
                type="text"
                name="sexo"
                ref={genderRef}
                />

              <label htmlFor="txtPlan">Plano</label>
              <input 
                id="txtPlan" 
                list="dataPlan"
                name="plan" 
                type="text"
                onChange={() => catchValue("txtPlan","dataPlan", setPlan )} 
                autoComplete={'off'}
                />

                <datalist id="dataPlan">
                  { //@ts-ignore
                    plans && plans.map((item, i) =>
                    <option key={i} data-id={item.id} value={item.name}/>
                    )}
                </datalist>


            </div>
          </form>
        </Modal>
      )} 
    </Container>
  )
}

// {
// 	"name":"Carolina Gomes Almeida",
// 	"RG":"389816437",
// 	"CPF":"35124386878",
// 	"email":"lukasalves271@gmail.com",
// 	"phone": "5511979675330",
// 	"birthday":"2021-06-29",
// 	"gender":"M",
// 	"plan":{
//     "id": "2a011dd0-249b-4a69-8978-5ba5350bc09c",
//     "name": "Particular"
//   }
// }