import GiftStyled from "./GiftStyled"

const Gift = (): React.ReactElement => {
return (
<GiftStyled className="gift">

<img className="gift__giftbox" height="100" width="100" src="/images/giftBox.png"/>
<img className="gift__blowfish" height="100" width="100" src="/images/blowfish.png"/>

</GiftStyled>
)

}
export default Gift
