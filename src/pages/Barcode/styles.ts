import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  /* @media(min-width: 769px){
    main {
      width: 100vw;
    }
  } */

  .go-back {
    position: fixed;
    top: 8px;
    left: 8px;
  }

  h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding: 30px 50px;
 }

 input,select {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin: 8px 0;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }
 
 main {
   width: 100vw;

  
 }
`

export const SVGContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;

  @media print {
    @page { margin: 0; }
    body { margin: 1.6cm; }
  }
`



