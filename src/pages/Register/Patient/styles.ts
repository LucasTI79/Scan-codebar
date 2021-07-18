import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  form {
    max-height: 50vh;
    overflow-y: scroll;
    .groupInput {
      display: flex;
      flex-direction: row;
    }
    input,select {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 10px;
    }
  }
`
