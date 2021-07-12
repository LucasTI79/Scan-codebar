import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .go-back {
    position: fixed;
    top: 8px;
    left: 8px;
  }

  main {
   width: 100vw;

    .responsive-table {
      width: 100%;
      margin: 0;
      padding: 0;
      border-collapse: collapse;
      border-spacing: 0;
        
      thead {
        visibility: hidden;
        background: #fafafa;
        @media screen and (min-width: 600px) {
          visibility: visible;
        }
      }
      
      tr {
        border: 1px solid #ddd;
        border-bottom: 2px solid #ddd;
        padding: 5px;
        margin-bottom: 10px;
        display: block;
        @media screen and (min-width: 600px) {
          display: table-row;
          border-bottom-width: 1px;
          margin-bottom: 0;
          
          &:nth-child(even) {
            background: #fafafa;
          }
        }
      }
      
      th,
      td {
        padding: 10px;
        text-align: left;
      }
      
      th {
        text-transform: uppercase;
        font-size: 11px;
      }
        
      td {
        display: block;
        text-align: right;
        font-size: 13px;
        border-bottom: 1px dotted #ddd;
        
        &:last-child {
          border-bottom: none;
        }
          
        @media screen and (min-width: 600px) {
          display: table-cell;
          text-align: left;
          font-size: 14px;
          border-bottom: none;
        }
      }
        
      td:before {
        content: attr(data-label);
        float: left;
        text-transform: uppercase;
        font-weight: bold;
        @media screen and (min-width: 600px) {
          content: "";
          display: none;
        }
      }
    }
  }
`

