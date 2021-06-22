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

  .title {
    text-align: center;
  }

  .name {
    font-size: 26px;
    text-align: center;
    margin: 10px 0;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 22px;
    }
  }
`;

