import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;

  background-color: #fff;
  border-radius: 12px;

  a{
    display: block;
    text-decoration: none;
    color: #000;
    padding: 10px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center; 
`;

export const Info = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  .name {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .name {
      font-size: 12px;
      margin-bottom: 12px;
    }
  }
`;

export const ActionButtons = styled.div`
  margin-left: 5px;
  padding: 0;

  .button{
    display: block;
    background-color: #2ecc71;
    border-radius: 5px;
    line-height: 0;
  }
`;