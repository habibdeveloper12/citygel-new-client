import { Helmet } from "react-helmet";
import { Text, Img, Input, Button } from "../../components";
import Header1 from "../../components/Header1";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PinInput from "react-pin-input";
import { SignInFormValidationSchemas } from "./SignInFormValidationSchemas";
import SocialLogin from "components/SocialLogin/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
import { jwtDecode } from "jwt-decode";
import Loading from "components/Loading/Loading";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "firebase.init";
import { password } from "config/password";
import CitygelLogo from "components/Footer/CitygelLogo";
import { message } from "antd";
export default function LoginPage() {
  const {
    handleSubmit,
    register,
    setValue,
    getFieldState,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(SignInFormValidationSchemas),
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);
  const [signInWithEmailAndPassword, user, gloading, error] =
    useSignInWithEmailAndPassword(auth);
  let { setAuthToken, setTUser, tuser } = useContext(AuthContext);

  const [user1] = useAuthState(auth);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";

  if (tuser && user1 && navigate) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />;
  }
  const onSubmit = async (e) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://citygel-backend.onrender.com/api/v1/auth/login`,
        {
          email: e.email,
          code: e.code,
        },
      );
      if (response.data) {
        try {
          const firebase = await signInWithEmailAndPassword(e.email, password);
          setLoading(false);
          console.log(response.data.data);
          if (firebase?.user?.email) {
            setAuthToken(response.data.data.accessToken);
            setTUser(jwtDecode(response.data.data.accessToken));
            localStorage.setItem("authToken", response.data.data.accessToken);
            message.success("Login Successfully");
          } else toast.error("Your account is created using google");
        } catch (error) {
          setLoading(false);
          toast.error("Firebase sign-in error: " + error);
        }
      } else {
        toast.error("please create your account first");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Please Enter Correct Code");
      console.log(error);
    }
  };

  const handleSendCode = async () => {
    const { email } = getValues();
    try {
      if (email) {
        const response = await axios.post(
          `https://citygel-backend.onrender.com/api/v1/auth/send-code`,
          {
            email: email,
          },
        );
        if (response.data) {
          toast.success("Otp code sent into your email");
        }
      } else {
        toast.error("please enter your email");
      }
    } catch (error) {}
  };
  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header1 />
      <div className="flex w-full flex-col items-center justify-start bg-gray-50">
        {/* <Header1 className="flex w-full flex-col items-center justify-center" /> */}
        <div className="mt-[50px] flex w-[40%] flex-col items-center justify-start gap-3.5 mq450:w-[90%]">
          <div className="relative h-[372px] w-full max-w-[372px] py-10">
            <div className="absolute top-[11%] right-0 left-0 m-auto flex w-full flex-col items-start justify-start">
              <div className="relative h-[257px] w-full">
                <Img
                  src="images/img_background_complete.svg"
                  alt="background_one"
                  className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[257px] justify-center"
                />
                <Img
                  src="images/img_group.svg"
                  alt="image_one"
                  className="absolute right-[28%] top-[26%] m-auto h-[37px]"
                />
              </div>
              <Img
                src="images/img_plant.svg"
                alt="plant_one"
                className="z-[1] mt-[-93px] ml-[58px] h-[104px]"
              />
            </div>
            <div className="absolute bottom-[15%] right-0 left-0 m-auto flex w-[78%] flex-col items-end justify-start">
              <div className="mr-1.5 flex w-[67%] flex-row items-center justify-end">
                <Img
                  src="images/img_character.svg"
                  alt="character_one"
                  className="z-[1] h-[158px]"
                />
                <Img
                  src="images/img_lamp.svg"
                  alt="lamp_one"
                  className="ml-[-6px] h-[203px]"
                />
              </div>
              <Img
                src="images/img_x3c_path_x3e_359.svg"
                alt="x3cpathx3e_one"
                className="mt-[-8px] h-[16px]"
              />
            </div>
            <div className="absolute left-[20%] top-[24%] m-auto flex w-[30%] flex-col items-center justify-start">
              <div className="flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-center justify-start rounded-md bg-white-A700 p-[18px]">
                  <div className="mt-1.5 flex w-[99%] flex-col items-center justify-start gap-[13px]">
                    <Img
                      src="images/img_group_white_a700.svg"
                      alt="image_two"
                      className="h-[29px] w-[29px]"
                    />
                    <div className="flex w-full flex-col items-center justify-start">
                      <div className="flex w-full flex-row justify-center">
                        <div className="flex w-full flex-col items-start justify-start">
                          <div className="relative h-[12px] w-full">
                            <Img
                              src="images/img_vector_white_a700.svg"
                              alt="vector_one"
                              className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[12px] justify-center"
                            />
                            <Img
                              src="images/img_vector_black_900_03.svg"
                              alt="vector_three"
                              className="absolute right-[6%] bottom-0 top-0 m-auto h-[5px] opacity-0.2"
                            />
                          </div>
                          <div className="z-[1] mt-[-8px] ml-[7px] flex flex-row justify-start">
                            <Text
                              size="s"
                              as="p"
                              className="!font-inter !text-black-900_03"
                            >
                              Name@mail.com
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        size="xs"
                        as="p"
                        className="mt-[11px] w-[24%] !font-inter !text-black-900_03"
                      >
                        Sign up now
                      </Text>
                      <div className="relative mt-[-2px] h-[12px] w-full">
                        <Img
                          src="images/img_vector_cyan_700_01.svg"
                          alt="vector_five"
                          className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[12px] justify-center"
                        />
                        <a
                          href="#"
                          className="absolute top-[17%] right-0 left-0 m-auto w-max"
                        >
                          <Text size="md" as="p" className="!font-inter">
                            Login
                          </Text>
                        </a>
                      </div>
                      <a href="#" className="mt-[5px] w-[36%]">
                        <Text
                          size="xs"
                          as="p"
                          className="!font-inter !text-black-900_03"
                        >
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-[31px]">
            <div className="flex w-full flex-col items-center justify-start">
              <div className="flex w-full max-w-full flex-col items-center justify-start gap-px">
                <div className="">
                  <h3 className="h-[66px] w-[438px] text-center font-poppins text-[44px]  font-medium sm:text-[24px] mq450:text-[24px] ">
                    Login to post an ad!
                  </h3>
                  <p className="h-[36px] w-[428px] pl-[8px] text-center align-middle font-poppins text-[23px] font-normal opacity-[40%]  sm:mt-[-20px] sm:h-[10px] sm:text-[16px] mq450:mt-[-20px] mq450:h-[10px] mq450:text-[16px]">
                    Please enter your credential Details.
                  </p>
                </div>
              </div>

              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mt-[9px] flex w-full flex-col items-start justify-start mq450:w-[90%]">
                  <div className="w-[90%] text-left">
                    {" "}
                    <Text
                      as="p"
                      className="mt-7 text-left !text-black-900_99 opacity-0.7"
                    >
                      Enter Your Email
                    </Text>
                  </div>
                  <div className="relative h-[80px] w-full">
                    <Input
                      register={register}
                      size="lg"
                      name="email"
                      onChange={(e) => setValue("email", e.target.value)}
                      placeholder="name@mail.com"
                      className={`left-0 bottom-0 right-0 top-0 m-auto w-full ${
                        errors.email?.message
                          ? "border-red-800 "
                          : "border-cyan-700_01"
                      }  absolute border border-solid`}
                    />
                    <Button
                      type="button"
                      onClick={handleSendCode}
                      color="cyan_700_01"
                      size="5xl"
                      variant="fill"
                      className="absolute right-[1%] bottom-0 top-0 m-auto min-w-[170px] rounded-[15px]"
                    >
                      Send OTP
                    </Button>
                  </div>
                  <div className="relative">
                    {errors.email?.message ? (
                      <p className="h-[36px] w-[428px] font-poppins text-[18px] font-normal text-red-A700 opacity-[40%] ">
                        {errors.email?.message}
                      </p>
                    ) : (
                      <p className="h-[36px] w-[428px] font-poppins text-[18px] font-normal text-red-500 opacity-[40%]">
                        Please enter your credential Details.
                      </p>
                    )}
                  </div>

                  <div className="relative flex w-full items-center justify-center">
                    <Controller
                      name="code"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { error },
                      }) => (
                        <div>
                          <PinInput
                            length={6}
                            initialValue=""
                            value={value}
                            onChange={onChange}
                            type="numeric"
                            inputMode="number"
                            style={{ padding: "15px", paddingLeft: "40px" }}
                            inputStyle={{
                              borderColor: "transparent",
                              backgroundColor: "rgba(217, 217, 217, 0.25)",

                              borderRadius: "10px",
                            }}
                            inputFocusStyle={{ borderColor: "#0B90AF" }}
                            onComplete={(value, index) => {}}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                          />
                        </div>
                      )}
                    />
                    {errors.code?.message && (
                      <Text
                        className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                        fontSize="xs"
                        bottom="-19px"
                        position="absolute"
                        color="#E85A2D"
                      >
                        <>Please enter valid Code</>
                      </Text>
                    )}
                  </div>
                  <a href="#" className="mt-[25px]">
                    <Text />
                  </a>
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "#0B90AF" }}
                  className="h-[80px] w-full rounded-[15px] font-poppins text-[24px] font-normal text-white-A700 mq450:w-[90%]"
                >
                  Sign in
                </button>
              </form>
            </div>
            <div className="flex w-full flex-row justify-center">
              <div className="flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-row items-start justify-start gap-[19px]">
                  <div className="mt-[13px] h-[2px] w-[46%] bg-black-900_75 opacity-0.3" />
                  <Text
                    size="2xl"
                    as="p"
                    className="text-center !text-black-900_75 opacity-0.3"
                  >
                    or
                  </Text>
                  <div className="mt-[13px] h-[2px] w-[46%] bg-black-900_75 opacity-0.3" />
                </div>
                <SocialLogin />
                <Text
                  size="2xl"
                  as="p"
                  className="mt-[33px] text-center !text-red-500"
                >
                  <span className="text-gray_500">Don’t have an account?</span>
                  <span className="text-red-500"></span>
                  <span
                    className="ml-2 cursor-pointer text-cyan-700_01"
                    onClick={() => navigate("/signup")}
                  >
                    Create Account
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer className="mt-[118px] flex w-full items-center justify-center bg-gray-100_01 p-[34px]" /> */}
      </div>
      <CitygelLogo />
    </>
  );
}
