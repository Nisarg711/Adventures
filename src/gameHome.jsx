import React, { useState } from 'react';
import './gamebox.css';

const GameHome = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const game = (e) => {
    const className1 = e?.target?.id; // Use the `id` from the clicked element
    console.log(className1);

    switch (className1) {
      case 'box1':
        setSelectedComponent("game1");
        window.open('/game1', '_blank');
        break;
      case 'box2':
        setSelectedComponent("game2");
        window.open('/game2', '_blank');
        break;
      case 'box3':
        setSelectedComponent("game3");
        window.open('/game3', '_blank');
        break;
      case 'box4':
        setSelectedComponent("game4");
        window.open('/game4', '_blank');
        break;
      default:
        setSelectedComponent(null);
        break;
    }
  };

  return (
    <div>
      <div className="Gamecon">
        <div id="box1" className="box10" onClick={(e) => game(e)}>
          <img
            id="box1"
            src="/Game image/NUm1.webp"
            alt="Game 1"
          />
        </div>
        <div id="box2" className="box10" onClick={(e) => game(e)}>
          <img
            id="box2"
            src="/Game image/num2.png"
            alt="Game 2"
          />
        </div>
        <div id="box3" className="box10" onClick={(e) => game(e)}>
          <img
            id="box3"
            src="/Game image/num3.png"
            alt="Game 3"
          />
        </div>
        <div id="box4" className="box10" onClick={(e) => game(e)}>
          <img
            id="box4"
            src="/Game image/num4.png"
            alt="Game 4"
          />
        </div>
      </div>
    </div>
  );
};

export default GameHome;
