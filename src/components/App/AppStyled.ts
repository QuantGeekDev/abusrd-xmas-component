import styled from "styled-components"

const AppStyled = styled.main`
position: relative;
display: flex;
flex-direction: column;
background-color: #000;
text-align: center;
justify-content: center;
align-items: center;
height: 100vh;
padding: 10px;
.app {

  &__tag{
  justify-self: start;
  color: #fff;
  font-size: 3rem;
  padding: 5px;
  }
}

`
export default AppStyled
