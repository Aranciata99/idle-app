"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [login, setLogin] = useState<
    { id: number; bookname: string; password: string }[]
  >([]);
  const router = useRouter();
  //Start Function immer gleich zu beginn
  useEffect(() => {
    //direkte Weiterleitung wenn eingelogged
    //sessionStorage.clear();
    // if (sessionStorage.length > 0) {
    //   router.push("/pages/gamePage");
    // }
    //Fetch Date
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
  }, []); //Klammer am schluss sagt dass es nur einmal aufgerufen wird

  //errors
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showMissingInput, setShowMissingInput] = useState(false);
  const [showError, setShowError] = useState("");

  //Check if Bookname Exist
  const isBooknameExisting = (triedName: string): boolean => {
    return login.some((login) => login.bookname === triedName);
  };

  //Check password of Book
  const passwordOfBookname = (
    triedName: string,
    triedPassword: string,
  ): boolean => {
    const id = login.findIndex((login) => login.bookname === triedName);
    const passwords = login.map((login) => login.password);
    return triedPassword === passwords[id];
  };

  //Click – New
  const handleCreateClick = async () => {
    if (userName === "") {
      setShowError("");
      setShowMissingInput(true);
    } else {
      if (isBooknameExisting(userName)) {
        setShowError("BOOK NAME, ALLREADY CHOSEN. TRY ANOTHER ONE");
      } else {
        if (userPassword === "") {
          setShowError("CHOOSE A PASSWORD");
          setShowMissingInput(true);
        } else {
          //SUCESS
          //Create new Login
          const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              bookname: userName,
              password: userPassword,
            }),
          });
          const data = await response.json();
          sessionStorage.setItem("userId", String(data.id));
          sessionStorage.setItem("userName", userName);

          // console.log(sessionStorage);
          const responseScore = await fetch("/api/score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: data.id,
              lastUpdate: new Date().toISOString(),
              mainValue: 0,
            }),
          });
          await responseScore.json();
          router.push("/pages/gamePage");
        }
      }
    }
  };

  //Click – Load
  const handleLoadClick = async () => {
    if (userName === "") {
      setShowError("");
      setShowMissingInput(true);
    } else {
      if (isBooknameExisting(userName)) {
        if (userPassword === "") {
          setShowError("BOOK FOUND, PLEASE TYPE IN THE PASSWORD");
          setShowMissingInput(true);
        } else if (passwordOfBookname(userName, userPassword)) {
          //SUCESS
          const user = login.find((login) => login.bookname === userName);
          if (user) {
            sessionStorage.setItem("userId", String(user.id));
            sessionStorage.setItem("userName", userName);
          }
          router.push("/pages/gamePage");
        } else {
          setShowError("WRONG PASSWORD");
        }
      } else {
        if (userPassword === "") {
          setShowError("BOOK NOT FOUND, TRY OTHER OR CREATE A NEW ONE");
        }
      }
    }
  };

  // //safe session data – Keep Loged in
  // const startSession = (chosenName: string) => {
  //   const user = login.find((login) => login.bookname === chosenName);
  //   if (user) {
  //     sessionStorage.setItem("userId", String(user.id));
  //     sessionStorage.setItem("userName", userName);
  //   }
  // };

  return (
    <form className="loginForm">
      <input
        type="text"
        placeholder={
          showMissingInput
            ? "CHOOSE A NAME OF A NEW BOOK OR A EXISTING ONE"
            : "NAME OF THE BOOK"
        }
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder={
          showMissingInput ? "PUT PASSWORD OF THE BOOK" : "BOOK PASSWORD"
        }
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button type="button" onClick={handleCreateClick}>
        CREATE NEW BOOK
      </button>
      <button type="button" onClick={handleLoadClick}>
        LOAD BOOK
      </button>
      <small>{showError}</small>
    </form>
  );
};

export default LoginForm;
