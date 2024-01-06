import { useRef, useState, useEffect } from "react";
import GiftStyled from "./GiftStyled";
import { toast } from "react-toastify";

const Gift = (): React.ReactElement => {
  const [isScratching, setIsScratching] = useState(false);
  const [scratchedArea, setScratchedArea] = useState(0); 
   const [firstNotification, setFirstNotification] = useState(0); 


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
      setScratchedArea(previousArea => previousArea + (scratchTraceHeight * scratchTraceWidth));
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

 useEffect(() => {
  const percentageScratchedThreshold = 1.5
  if(!canvasReference.current!.width && canvasReference.current!.height ){
    return
  }
    const totalArea = canvasReference.current!.width * canvasReference.current!.height;

        if (totalArea && (scratchedArea / totalArea) >= (percentageScratchedThreshold/2) && !firstNotification) {
          setFirstNotification(1)
          toast.warn("You're almost there. Keep scratching")
    
    }
    if (totalArea && (scratchedArea / totalArea) >= percentageScratchedThreshold) {
      canvasReference.current!.style.display = 'none';
      toast.success("Nice! Now click the blowfish. Nothing should happen...")
    
    }
  }, [scratchedArea, firstNotification]);

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
      <img className="gift__blowfish" src="/images/blowfish.png" onClick={()=>alert("Si pulsas el pez globo pasan cosetes...")} />
    </GiftStyled>
  );
};

export default Gift;
