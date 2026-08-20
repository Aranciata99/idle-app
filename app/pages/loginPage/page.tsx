import React from "react";

import MainMenueLayout from "../../components/startMenue/MainMenueLayout";
import LoginForm from "../../components/startMenue/LoginForm";

const loginPage = () => {
  return (
    <>
      <LoginForm></LoginForm>
      <MainMenueLayout name="LOG IN" backButton>
        <></>
      </MainMenueLayout>
    </>
  );
};

export default loginPage;
