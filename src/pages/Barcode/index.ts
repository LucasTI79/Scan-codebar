import styled from 'styled-components';

const InputConstants = {
  height: '48px', 
  width: '180px',
  radius: '30px',
  border: '1px solid',
  shadow: '0 3px 3px rgba(0,0,0,0.05)'
}

export const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  width: 100%;
  label, i {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    pointer-events: none;
  } 
  
  i {
    left: 0;
    color: #bdbdbd;
    padding: 6px;
    padding-left: 18px;
    transform-origin: center;
    cursor: pointer;
  }

  label {
    left: 36px * 1.2;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #bdbdbd;
  }

  input {
    width: 180px;
    height: 100%;
    padding-left: 36px;
    padding-left: 12px;
    font-size: 16px;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #ffa6f7;
    caret-color: #dbdbdb;
    outline: none;
    box-shadow: inset 0 -3px 0 rgba(0,0,0,0.05);
  }
`