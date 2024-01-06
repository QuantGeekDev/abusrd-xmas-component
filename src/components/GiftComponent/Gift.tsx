import { useRef, useState, useEffect } from "react";
import GiftStyled from "./GiftStyled";

const Gift = (): React.ReactElement => {
  const [isScratching, setIsScratching] = useState(false);

  const giftReference = useRef<HTMLDivElement>(null);
  const canvasReference = useRef<HTMLCanvasElement>(null);

  const handleMouseDown = () => {
    setIsScratching(true);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const scratchTraceHeight = 5;
    const scratchTraceWidth = 5;
    if (!isScratching || !canvasReference.current) return;

    const canvasContext = canvasReference.current.getContext('2d');
    if (canvasContext) {
      const rect = canvasReference.current.getBoundingClientRect();
      const xPosition = event.clientX - rect.left;
      const yPosition = event.clientY - rect.top;
      canvasContext.globalCompositeOperation = 'destination-out';
      canvasContext.rect(xPosition, yPosition, scratchTraceHeight, scratchTraceWidth); 
      canvasContext.fill();
    }
  };

 useEffect(() => {
    const canvas = canvasReference.current;
    const canvasContext = canvas?.getContext('2d');

    const giftBoxImage = new Image();
    giftBoxImage.src = '/images/giftBox.png';
    giftBoxImage.onload = () => {
      canvasContext?.drawImage(giftBoxImage, 0, 0, canvas!.width, canvas!.height);
    }
  }, []);


  return (
    <GiftStyled className="gift" ref={giftReference}>
      <canvas
        ref={canvasReference}
        className="gift__canvas"
        width="300" 
        height="300"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp} 
      ></canvas>
      <img className="gift__blowfish" src="/images/blowfish.png" />
    </GiftStyled>
  );
};

export default Gift;
