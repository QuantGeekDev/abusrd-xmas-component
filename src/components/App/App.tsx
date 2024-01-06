import { ToastContainer } from "react-toastify"
import GiftFrame from "../GiftFrame/GiftFrame"
import AppStyled from "./AppStyled"
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{
  return <AppStyled className="app">
  <ToastContainer/>
  <span className="app__tag">You have a new gift!</span>
    <GiftFrame/>
  </AppStyled>
}
export default App
