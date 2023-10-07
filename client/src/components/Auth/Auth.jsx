import React from "react";
import AuthForm from "./AuthForm";

const Auth = () => {
  const getData = (data) => {
    console.log(data)
  };
  return (
    <>
      <AuthForm onSubmit={getData} />
    </>
  );
};

export default Auth;
