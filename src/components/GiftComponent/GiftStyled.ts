import styled from "styled-components"

const GiftStyled = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
position: absolute;
width: 100%;
height: 100%;


.gift {

  &__giftbox {
  object-fit: cover;
  object-fit: contain;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;

    &:active {
    display:none
    }

  }

  &__blowfish {
    position: absolute;
    left: 10px;
    top: 30px;
    object-fit: cover;
    object-fit: contain;
    z-index: 0;
    width: 100%;
  }
}

`

export default GiftStyled
