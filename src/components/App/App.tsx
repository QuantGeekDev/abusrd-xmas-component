import { ToastContainer } from "react-toastify"
import AppStyled from "./AppStyled"
import 'react-toastify/dist/ReactToastify.css';
import Gift from "../GiftComponent/Gift";

const App = () =>{
  return <AppStyled className="app">
  <ToastContainer/>
  <span className="app__tag">You have a gift! </span>
  <span className="app__tag">Scratch it to see what's inside... </span>
    <Gift/>
  </AppStyled>
}
export default App
