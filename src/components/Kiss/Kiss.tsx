import  { useEffect, useState } from 'react';
import KissStyled from './KissStyled';

interface KissProps {
startX: number;
startY: number;
onComplete: () => void
}

const Kiss = ({ startX, startY, onComplete }: KissProps) => {
  const [position, setPosition] = useState({ x: startX, y: startY });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((previous) => ({ x: previous.x -2, y: previous.y - 0.5 })); 
    }, 20);

    const timeout = setTimeout(() => {
      clearInterval(interval); 
      onComplete(); 
    }, 2000); 

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [startX, startY, onComplete]);

  const {x, y} = position

  return (
    <KissStyled style={{ left: `${x}px`, top: `${y}px` }}>
      💋
    </KissStyled>
  );
};

export default Kiss;
