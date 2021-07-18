import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  form {
    max-height: 50vh;
    overflow-y: auto;

    .containerinputs {
      height: 50vh;
      flex-direction: column;
    }
    .groupInput {
      display: flex;
      flex-direction: row;
    }

    input,select, datalist {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
    }

    #dataPatient {
      option {
        text-transform: capitalize;
      }
    }

    label {
      color: #3d3d3d;
      display: block;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 500;
      margin: 8px 0;
    }
  }
`
