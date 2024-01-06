import styled from "styled-components"

const AppStyled = styled.main`
display: flex;
flex-direction: column;
background-color: #000;
justify-content: center;
align-items: center;
height: 100vh;
padding: 10px;
.app {

  &__tag{
  padding: 20px;
  justify-self: start;
  color: #fff;
  font-size: 3rem;
  }
}

`
export default AppStyled
