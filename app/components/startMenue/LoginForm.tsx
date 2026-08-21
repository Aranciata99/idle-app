"use client";

import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [showError, setShowError] = useState(false);

  const handleClick = async () => {
    if (username === "") {
      setShowError(true);
    } else {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      console.log("User gespeichert:", data);
    }
  };

  return (
    <form className="loginForm">
      <input
        type="text"
        placeholder={showError ? "GIB EINEN USERNAME EIN!" : "USERNAME"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        CREATE NEW GAME
      </button>
      <button type="button" onClick={handleClick}>
        LOAD GAME
      </button>
    </form>
  );
};

export default LoginForm;
