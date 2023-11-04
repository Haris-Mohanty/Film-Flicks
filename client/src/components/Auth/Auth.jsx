import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthReq } from "../../api/api";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onresReceived = (data) => {
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
    navigate("/");
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
