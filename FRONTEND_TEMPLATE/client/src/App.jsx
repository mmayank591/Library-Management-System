import React, { useEffect } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home" 
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import Register from "./pages/Register"
import OTP from "./pages/OTP"
import ResetPassword from "./pages/ResetPassword"
import {ToastContainer} from "react-toastify"
import {useDispatch,useSelector} from "react-redux";
import {getUser}from "./store/slices/authSlice";
import {fetchAllUsers} from "./store/slices/userSlice";

const App = () => {
  const {user,isAuthenticated} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  //Jab refresh karna par user logout na kare
  useEffect( ()=> {
    dispatch(getUser());
    if(isAuthenticated && user?.role === "Admin")
    {
      console.log("The logged in User is an Admin")
      dispatch(fetchAllUsers());
    }
  },[isAuthenticated]);
  return <Router>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/password/forgot" element={<ForgotPassword />}></Route>
    <Route path="/otp-verification/:email" element={<OTP />}></Route>
    <Route path="/password/reset/:token" element={<ResetPassword />}></Route>
    </Routes>
    <ToastContainer theme="dark"></ToastContainer>
  </Router>;
};

export default App;
