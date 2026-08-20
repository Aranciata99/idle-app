import React from "react";
import { ReactNode } from "react";

import MainMenueButton from "./MainMenueButton";

interface Props {
  name: string;
  backButton: boolean;
  children: ReactNode;
}

const MainMenueLayout = ({ name, backButton, children }: Props) => {
  return (
    <div className="menueScreen">
      <h1>{name}</h1>
      <MainMenueButton />
    </div>
  );
};

export default MainMenueLayout;
