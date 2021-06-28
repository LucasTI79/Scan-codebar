import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15vw;
  nav {
    flex-direction: row;
    ul {
      margin:0;
      padding: 0;
      a {
        height: 50px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #0f0f0f;
        padding: 5% 10%;
        :hover {
          background-color: #ccc;
        } 
      }
    } 
  }

  @media (max-width: 768px)
  {
    display: none;
  }

`