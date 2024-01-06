import GiftComponent from "../GiftComponent/GiftComponent"
import GiftFrameStyled from "./GiftFrameStyled"

const Frame = ():React.ReactElement => {
return <GiftFrameStyled className="gift-frame">  
  <GiftComponent/>
</GiftFrameStyled>

}
export default Frame
