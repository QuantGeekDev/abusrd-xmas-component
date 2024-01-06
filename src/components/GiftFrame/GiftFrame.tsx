import Gift from "../GiftComponent/Gift"
import GiftFrameStyled from "./GiftFrameStyled"

const Frame = ():React.ReactElement => {
return <GiftFrameStyled className="gift-frame">  
  <Gift/>
</GiftFrameStyled>

}
export default Frame
