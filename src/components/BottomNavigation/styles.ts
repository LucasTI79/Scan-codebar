import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;

  @media(min-width: 769px){
    display: none;
  }
`

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100vw;
  
  /* .link-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    text-decoration: none;
    color: #000;
  } */

  .link-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: #000;
    :hover{
      background-color: #ccc;
    }
  }
`