import React from "react";

import MainMenueLayout from "../../components/startMenue/MainMenueLayout";
import LoginForm from "../../components/startMenue/LoginForm";

const accountPage = () => {
  return (
    <>
      <LoginForm></LoginForm>
      <MainMenueLayout name="ACCOUNT" backButton>
        <></>
      </MainMenueLayout>
    </>
  );
};

export default accountPage;
