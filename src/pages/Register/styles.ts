import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin:0;
  padding: 0;
`

export const Wrapper = styled.main`
  display: flex;
  width: 90vw;
  height: 100vh;

  @media (max-width: 768px){
    width: 100vw;
    flex-direction: column;
  } 

  .tabs{
    font-family:arial;
    margin: 0 auto;
    width:100%;
    height: 10vh;
    text-align:left;

    .tab-content {
      height: 85vh;
      @media (max-width: 768px){
        height: 75vh;
        overflow-y: auto;
      } 
    }

    .plus {
      display: flex;
      flex-direction: row;
      margin: 0.5rem 2%;
      padding: 0.5rem 0.75rem;
      background-color: #50ae54;
      border-radius: 5px;
      border: transparent;
      color: white;
      font-size: 1rem;
      justify-content: space-around;
    }
  }

  .tab-buttons{
    margin: 0px 10px 5px 10px;
    height: 10vh;


    button{
      font-size:20px;
      background:transparent;
      border:none;
      outline:none;
      padding:10px 20px ;
      cursor:pointer;
      color:rgba(0,0,0,.4);
      transition:all ease-in-out .4s;
      border-bottom:2px solid transparent;

      :hover {
        background-color: #cdcdcd;
      }
    
    }

    .active{
      border-bottom:2px solid #6976d9;
    
      color:#6976d9;
    }
  }  
`

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1%;
  .content {
    flex: 33%;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 1%;
    height: 100%;
    padding: 1.5%;
    border-radius: 5px;

    @media (max-width: 768px){
      flex: 48%;
      max-width: 50%;
    }

    @media (max-width: 576px){
      flex: 90%;
      max-width: 100%;
    }
    
    div {
      display: flex;
      flex-direction: row;
      height: 50%;
    }

    .actions {
      justify-content: flex-end;
      
      button {
        cursor: pointer;
        border:  transparent;
        font-family: sans-serif;
        font-size: 14px;
        border-radius: 4px;
        padding: 10px 5px;
        box-sizing: border-box;
        margin-left: 5px;
        background-color: transparent;
        text-transform: uppercase;
        font-weight: bold;

        :hover {
          background-color: rgba(0,0,0,0.1);
        }
      }

      .delete {
        color: rgb(244,67,54);
      }
    }
  }
`