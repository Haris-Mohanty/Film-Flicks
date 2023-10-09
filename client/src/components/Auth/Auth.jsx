import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthReq } from "../../api/api";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";

const Auth = () => {
  const dispatch = useDispatch();
  const onresReceived = (data) => {
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
  };

  //*************** USER AUTHENTICATION (SIGNUP & LOGIN) ************/
  const getData = (data) => {
    sendUserAuthReq(data.inputs, data.signup)
      .then(onresReceived)
      .catch((err) => console.log(err));
  };
  return (
    <>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </>
  );
};

export default Auth;
