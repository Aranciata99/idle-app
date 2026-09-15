import React from "react";

import GameNavButtons from "./GameNavButtons";
import styles from "./GameNavigaition.module.css";
import Image from "next/image";
import Script from "next/script";

//Simple Array

//const buttons = [1, 2, 3, 4, 5];
// {buttons.map((i) => (
//         <GameNavButtons
//           key={i}
//           id={`NavbarButton-${i}`}
//           imgSrc={`/images/navigation/navIcons-${i}.png`}
//           imgAlt={`NavbarButton-${i}`}
//         />
//       ))}

const GameNavBar = () => {
  const buttonCount = 5;
  return (
    <div className={styles.container}>
      {Array.from({ length: buttonCount }, (_, i) => (
        <GameNavButtons
          key={i + 1}
          id={`NavbarButton-${i + 1}`}
          imgSrc={`/images/navigation/navIcons-${i + 1}.png`}
          imgAlt={`NavbarButton-${i + 1}`}
        ></GameNavButtons>
      ))}
      <Script src="/scripts/gameUI.js" />
      {/* <GameNavButtons
        id="NavbarButton-1"
        imgSrc="/images/navigation/navIcons-1.png"
        imgAlt="NavbarButton-1"
      ></GameNavButtons>
      <GameNavButtons
        id="NavbarButton-2"
        imgSrc="/images/navigation/navIcons-2.png"
        imgAlt="NavbarButton-2"
      ></GameNavButtons> */}
    </div>
  );
};

export default GameNavBar;
