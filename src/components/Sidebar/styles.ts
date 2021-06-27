import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 100vh;
  nav {
    flex-direction: row;
    a {
      height: 50px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #0f0f0f;
      padding: 10% 10%;
      :hover {
        background-color: #ccc;
      } 
    }
  }

`