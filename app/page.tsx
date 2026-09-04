import Image from "next/image";
import MenueButton from "./components/startMenue/MenueButton";
import MainMenueLayout from "./components/startMenue/MainMenueLayout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="menueScreen">
      <MenueButton name="START" linkTarget="pages/accountPage"></MenueButton>{" "}
      <br />
      <MenueButton
        name="HOW TO"
        linkTarget="pages/howToPlayPage"
      ></MenueButton>{" "}
      <br />
      <MenueButton name="CREDITS" linkTarget="pages/creditsPage"></MenueButton>
      <MainMenueLayout name="IDLE BOOK" backButton={false}>
        <></>
      </MainMenueLayout>
    </div>
  );
}
