import { ToastContainer } from "react-toastify"
import AppStyled from "./AppStyled"
import 'react-toastify/dist/ReactToastify.css';
import Gift from "../GiftComponent/Gift";

const App = () =>{
  return <AppStyled className="app">
  <ToastContainer/>
  <span className="app__tag">You have a gift! </span>
  <span className="app__tag">Scratch ALL of it to be surprised... </span>
    <Gift/>
  </AppStyled>
}
export default App
