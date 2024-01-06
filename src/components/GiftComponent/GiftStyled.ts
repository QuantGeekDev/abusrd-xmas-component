import styled from "styled-components";

const GiftStyled = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  .gift {
    &__canvas {
      position: absolute;
      z-index: 2;
      touch-action: none;
    }

    
    &__blowfish {
      position: relative;
      top: 0;
      left: 0;
      z-index: 1; 

    }
  }
`;

export default GiftStyled;
