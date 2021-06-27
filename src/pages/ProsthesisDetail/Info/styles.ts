import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  .go-back {
    position: fixed;
    top: 15px;
    left: 15px;
  }
  .container {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    padding: 30px 50px;

    input , select {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 10px;
      margin-top: 5%;
      width: 100%;
    }

    label {
      margin-top: 5%;
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

   }
`;

