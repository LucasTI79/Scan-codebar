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



