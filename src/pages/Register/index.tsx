import React from 'react';
import { Container, Wrapper } from './styles';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';
import Plans from './Plans';
import Status from './Status';
import Lab from './Lab';
import { ReactNode } from 'react';
import Patient from './Patient';
//@ts-ignore
import Flickity from "react-flickity-component";

import "./flickity.css";

export default function Register(){
  return (
      <Container>
        <Sidebar />
        <Wrapper>
          <div className="tabs">
    
          <Tabs>

            <Tab label="Pacientes">
                <Patient />
            </Tab>

            <Tab label="Laboratórios">
                <Lab />
            </Tab>

            <Tab label="Serviços">
              <div>
                <p>Tab 3 content</p>
              </div>
            </Tab>
            
            <Tab label="Planos">
                <Plans />            
            </Tab>

            <Tab label="Status">
                <Status /> 
            </Tab>

          </Tabs>
        </div>

        <BottomNavigation />

        </Wrapper>
      </Container>
  )
}

const Tabs: React.FC  = (props: any)=> {
  const [activeTab, setActiveTab] = React.useState<HTMLButtonElement>()
  const changeTab = (tab: HTMLButtonElement) => {
    setActiveTab(tab)
  }
  let content;
  let buttons:any[] = [] 
    return (
      <div>
        {React.Children.map(props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }

  interface ITabButtonsProps{
    buttons: HTMLButtonElement[],
    changeTab: (tab: HTMLButtonElement) => void,
    activeTab: any
  }

  const TabButtons: React.FC<ITabButtonsProps> = ({buttons, changeTab, activeTab}) =>{
    const [width, setWidth] = React.useState<number>(() => document.body.clientWidth);
    return(
      <div className="tab-buttons">
      {
        width >= 768 ? (
          <div>
          { 
            buttons.map((button: any, index: number )=>{
              return <button key={index} className={button === activeTab ? 'active carousel-cell': 'carousel-cell'} onClick={()=> changeTab(button)}>{button}</button>
            }) 
          }
         </div>
          
        ) : (
          <Flickity 
            options={{
              freeScroll: true,
              pageDots: false,
              draggable: true,
              cellAlign:'left',
              contain: true,
              asNavFor:'.active',
              prevNextButtons: false
            }}>
            {
              buttons.map((button: any, index: number )=>{
                return <button key={index} className={button === activeTab ? 'active carousel-cell': 'carousel-cell'} onClick={()=> changeTab(button)}>{button}</button>
              }) 
            }
          </Flickity>
        )
      }
      </div>
    )
  }

  interface ITabProps {
    children?: ReactNode;
    label?: string;
  }

  const Tab: React.FC<ITabProps> = (props) =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }
