import React from "react";
import AuthForm from "../Auth/AuthForm";
import { sendAdminLoginReq } from "../../api/api";
import { useDispatch } from "react-redux";
import { adminActions } from "../../store";

const Admin = () => {
  const dispatch = useDispatch();
  const onresReceived = (data) => {
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.id);
    localStorage.setItem("token", data.token);
  };

  const getData = (data) => {
    sendAdminLoginReq(data.inputs)
      .then(onresReceived)
      .catch((err) => console.log(err));
  };
  return (
    <>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </>
  );
};

export default Admin;
