import React from "react";
import AuthForm from "./AuthForm";

const Auth = () => {
  const getData = (data) => {
    console.log(data);
  };
  return (
    <>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </>
  );
};

export default Auth;
