"use client";

import React, { useEffect, useState } from "react";
//Modules
import GameNavBar from "./Navigation/GameNavBar";
//Styles
import styles from "./GameLayout.module.css";
//Data
import sessionValues from "../../data/sessionValues.json";

const GameLayout = () => {
  //
  //Values
  const [mainValue, setMainValue] = useState<number>(0);

  //Get Main Value from Database

  useEffect(() => {
    //Fetch Data
    const fetchData = async () => {
      try {
        const data = await fetch("/api/score");
        const response = await data.json();
        setMainValue(response.score[0].mainValue);
        console.log("response" + response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    //create new state if empty
  }, []); //Klammer am schluss sagt dass es nur einmal aufgerufen wird

  //Safe Value in Database

  const saveToDatabase = async (value: number) => {
    try {
      await fetch("/api/score", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mainValue: value }),
      });
      console.log("Gespeichert!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      saveToDatabase(mainValue);
    }, 30000);

    return () => clearInterval(interval); //wenn Seite verlassen wird
  }, [mainValue]);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      saveToDatabase(mainValue);
    });
  }, [mainValue]);

  //Clicks

  const handleCreateClick = () => {
    setMainValue(mainValue + 1);
    console.log(sessionStorage);

    // clicks++;
  };
  //Values
  return (
    <div>
      <button
        id="mainClickButton"
        className={styles.mainClickerButton}
        type="button"
        onClick={handleCreateClick}
      >
        <div id="fillButton"></div>
      </button>
      <div className={styles.mainValue}>
        <h1>{mainValue}</h1>
      </div>
      <div className={styles.sessionValue}>
        <h1>{sessionValues.levelTitles[0].label}</h1>
      </div>
      <GameNavBar />
    </div>
  );
};

export default GameLayout;
