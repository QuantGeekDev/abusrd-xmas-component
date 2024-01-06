import styled from "styled-components";

const GiftStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .gift {
    &__canvas {
      position: absolute;
      top: -40px;
      left: -50px;
      z-index: 2; 
    }

    &__blowfish {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1; 
      width: 100%;
      height: 100%;
    }
  }
`;

export default GiftStyled;
