import React from "react";

import styles from "./GameNavigaition.module.css";

interface Props {
  id: string;
  imgSrc: string;
  imgAlt: string;
}

const GameNavButtons = ({ id, imgSrc, imgAlt }: Props) => {
  return (
    <div id={id} className={styles.iconContainer}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default GameNavButtons;
