import GiftFrame from "../GiftFrame/GiftFrame"
import AppStyled from "./AppStyled"

const App = () =>{
  return <AppStyled className="app">
  <span className="app__tag">You have a new gift!</span>
    <GiftFrame/>
  </AppStyled>
}
export default App
