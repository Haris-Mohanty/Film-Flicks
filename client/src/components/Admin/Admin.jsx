import React from "react";
import AuthForm from "../Auth/AuthForm";

const Admin = () => {
  const getData = (data) => {
    console.log(data);
  };
  return (
    <>
      <AuthForm onSubmit={getData} />
    </>
  );
};

export default Admin;
