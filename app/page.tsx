"use client";

import Image from "next/image";
import MenueButton from "./components/startMenue/MenueButton";
import MainMenueLayout from "./components/startMenue/MainMenueLayout";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Home() {
  const [login, setLogin] = useState<{ id: number }[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/login");
        const response = await data.json();
        setLogin(response.login);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
      <p>{login.map((login) => login.id)}</p>
    </div>
  );
}
