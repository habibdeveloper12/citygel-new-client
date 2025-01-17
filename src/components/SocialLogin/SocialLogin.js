import React, { useContext, useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Img } from "components";
import Loading from "components/Loading/Loading";
import auth from "firebase.init";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { message } from "antd";
import { BASE_URL } from "config/api/axios";

const SocialLogin = () => {
  const [signInWithGoogle, user, gloading, error] = useSignInWithGoogle(auth);
  const [signup, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let { setAuthToken, setTUser } = useContext(AuthContext);

  let from = location.state?.from?.pathname || "/";
  if (loading) {
    return <Loading />;
  }
  if (gloading) {
    return <Loading />;
  }
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, displayName, email } = result.user;

      // Check if the user's email already exists
      const response = await axios.get(`${BASE_URL}/users/${email}`);
      setLoading(false);
      if (response.data) {
        const response = await axios.post(`${BASE_URL}/auth/google-auth`, {
          email: email,
        });
        if (response.data) {
          setLoading(false);

          console.log(response.data.data);
          setAuthToken(response.data.data.accessToken);
          setTUser(jwtDecode(response.data.data.accessToken));
          console.log(response.data.data.accessToken);
          localStorage.setItem("authToken", response.data.data.accessToken);
          message.success("Login Successfully");

          navigate(from);
        } else {
          toast.error("please create your account first");
        }
      }
    } catch (error) {
      // signOut();
      setLoading(true);
      setSignUp(true);
      toast.success("please add your information");
      setLoading(false);
      window.location.href = "/confirm"; // Navigate to "/confirm" page upon error
    }
  };
  return (
    <div>
      {" "}
      <div
        onClick={() => handleGoogleSignIn()}
        className="mt-[18px] flex h-[80px] w-[80px] cursor-pointer flex-col items-center justify-start rounded-[50%] bg-blue_gray-100_19 p-[22px]"
      >
        <Img
          src="images/img_group_red_500_01.svg"
          alt="image_three"
          className="h-[36px] w-[36px]"
        />
      </div>
    </div>
  );
};

export default SocialLogin;
