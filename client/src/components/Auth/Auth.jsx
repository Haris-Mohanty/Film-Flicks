import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthReq } from "../../api/api";

const Auth = () => {

  //*************** USER AUTHENTICATION (SIGNUP & LOGIN) ************/
  const getData = (data) => {
    sendUserAuthReq(data.inputs, data.signup)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </>
  );
};

export default Auth;
