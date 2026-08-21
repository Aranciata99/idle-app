import Image from "next/image";
import MenueButton from "./components/startMenue/MenueButton";
import MainMenueLayout from "./components/startMenue/MainMenueLayout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="menueScreen">
      <MenueButton
        name="Start Game"
        linkTarget="pages/accountPage"
      ></MenueButton>{" "}
      <br />
      <MenueButton
        name="How To Play"
        linkTarget="pages/howToPlayPage"
      ></MenueButton>{" "}
      <br />
      <MenueButton name="Credits" linkTarget="pages/creditsPage"></MenueButton>
      <MainMenueLayout name="IDLE TOWER" backButton={false}>
        <></>
      </MainMenueLayout>
    </div>
  );
}
