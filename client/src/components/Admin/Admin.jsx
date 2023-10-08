import React from "react";
import AuthForm from "../Auth/AuthForm";
import { sendAdminLoginReq } from "../../api/api";

const Admin = () => {
  const getData = (data) => {
    sendAdminLoginReq(data.inputs)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </>
  );
};

export default Admin;
