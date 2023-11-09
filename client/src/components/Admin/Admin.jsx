import React from "react";
import AuthForm from "../Auth/AuthForm";
import { sendAdminLoginReq } from "../../api/api";
import { useDispatch } from "react-redux";
import { adminActions } from "../../store";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onresReceived = (data) => {
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.id);
    localStorage.setItem("token", data.token);
    navigate("/");
  };

  const getData = (data) => {
    sendAdminLoginReq(data.inputs)
      .then(onresReceived)
      .catch((err) => toast.error("Failed to load, try again!"));
  };
  return (
    <>
      <ToastContainer />
      <AuthForm onSubmit={getData} isAdmin={true} />
    </>
  );
};

export default Admin;
