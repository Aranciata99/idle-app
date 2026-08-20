import React from "react";

interface Props {
  name: string;
  linkTarget: string;
}

const MenueButton = ({ name, linkTarget }: Props) => {
  return (
    <a href={linkTarget}>
      <button className="menueButton">{name}</button>
    </a>
  );
};

export default MenueButton;
