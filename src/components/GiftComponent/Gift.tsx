import { useRef, useState, useEffect } from "react";
import GiftStyled from "./GiftStyled";
import { toast } from "react-toastify";
import Kiss from "../Kiss/Kiss";

const Gift = (): React.ReactElement => {
  interface KissPosition{
    x: number,
    y: number
  }
  
  const [kisses, setKisses] = useState<KissPosition[]>([] as KissPosition[]); 
  const [isScratching, setIsScratching] = useState(false);
  const [scratchedArea, setScratchedArea] = useState(0); 
  const [firstNotification, setFirstNotification] = useState(0); 

  const handleFishClick = () =>{
    if(!blowfishRef.current){
      return
    } 

  const mouthPosition = {
      x: blowfishRef.current.height-5,
      y: blowfishRef.current.width+45,
    };
  setKisses([...kisses, mouthPosition]);
  
};

  const canvasReference = useRef<HTMLCanvasElement>(null);
  const blowfishRef = useRef<HTMLImageElement>(null)

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
  const percentageScratchedThreshold = 1.2
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
    <GiftStyled className="gift" >
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
      <img className="gift__blowfish" src="/images/blowfish.png" ref={blowfishRef} onClick={handleFishClick} />

        {kisses.map((kiss, kissIndex) => (
        <Kiss
          key={kissIndex}
          startX={kiss.x}
          startY={kiss.y}
          onComplete={() => {
            setKisses((currentKisses) => currentKisses.filter((_, currentIndex) => currentIndex !== kissIndex));
          }}
        />
      ))}
    </GiftStyled>
  );
};

export default Gift;
