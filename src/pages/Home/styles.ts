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
`
