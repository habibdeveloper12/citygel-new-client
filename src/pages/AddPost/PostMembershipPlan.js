import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
  setForm,
  setMembership,
} from "store/slices/adsPostSlice";

const PostMembershipPlan = () => {
  const { register, handleSubmit, errors, control } = useForm();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const { currentStep, categories, subcategory, form } = useSelector(
    (state) => state.post,
  );
  const handleMembershipSelect = (selectedMembership) => {
    setSelected(selectedMembership);
    dispatch(setMembership(selected));
  };
  const handleNext = () => {
    dispatch(nextStep());
  };
  const handlePrev = () => {
    dispatch(prevStep());
  };
  console.log(form);
  return (
    <div className=" min-h-screen mq1050:mt-36">
      
      <div className="">
        <main className=" w-full flex flex-col items-start justify-start gap-[83px] max-w-full text-left text-25xl text-black font-poppins mq750:gap-[21px_83px] mq1050:gap-[41px_83px]">
          <div className="w-full flex flex-row items-start justify-center pt-0 px-5 pb-[37px] box-border max-w-full">
            <div className="w-full flex flex-col items-start pl-11 mq800:pl-0 justify-start gap-[20px] max-w-full">
              <h1 className="m-0 relative text-inherit font-medium font-inherit inline-block max-w-full z-[4] mq450:text-7xl mq1050:text-16xl">{`Pricing & Plans`}</h1>
              <div className="self-stretch relative text-3xl leading-[35px] text-gray-1200 z-[4] mq450:text-lg mq450:leading-[28px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem `}</div>
            </div>
          </div>
          <section className="pt-0 px-5 pb-[8.300000000000182px] box-border max-w-full text-left text-22xl-5 text-main-color font-poppins">
            <div className=" w-full flex flex-row sm:flex-col mq450:flex-col mq750:flex-col mq1050:flex-col items-start justify-start max-w-full">
              <div className="w-[100%] mq450:w-[100%] mq750:w-[100%] rounded-[29.94px] bg-white-A700  flex flex-row items-start justify-start py-[46.09999999999991px] px-[78.29999999999927px] box-border gap-[39.10000000000037px] max-w-full z-[4] mq750:flex-wrap mq750:gap-[39.10000000000037px_20px] mq750:pl-[39px] mq750:pr-[39px] mq750:box-border">
                <div className="h-[537.8px] w-[50%] relative rounded-[29.94px] bg-white-A700 hidden max-w-full" />
                <div className="w-[50%] flex flex-col items-start justify-start pt-0 px-0 pb-[0.8999999999996362px] box-border gap-[97px] min-w-[50%]  z-[5] mq450:gap-[48px_97px] mq750:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[23.030948638916016px]">
                    <div className="h-[53px] overflow-hidden shrink-0 flex flex-row items-center justify-end pt-[9.799999999999956px] pb-0 pr-3.5 box-border gap-[2px]">
                      <b className="relative leading-[48.97px] mq450:text-6xl mq450:leading-[32px] mq1050:text-14xl mq1050:leading-[42px]">
                        Free
                      </b>
                      <div className="relative text-lgi-6 font-medium text-lightslategray inline-block min-w-[76px]">
                        /month
                      </div>
                    </div>
                    <div className="self-stretch h-[106.3px] overflow-hidden shrink-0 flex flex-col items-start justify-start text-13xl-2">
                      <div className="h-24 relative font-medium inline-block mq450:text-lgi mq1050:text-7xl">
                        <p className="m-0">Starter</p>
                      </div>
                      <div className="self-stretch relative text-mid-3 font-medium text-lightslategray mt-[-40px]">
                        Unleash the power of automation.
                      </div>
                    </div>
                    <div className="w-[238.4px] flex flex-col items-start justify-start gap-[11.515474319458008px] text-mid-3 text-lightslategray">
                      <div className="self-stretch h-[24.2px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[11px]">
                        <img
                          className="h-[23px] w-[23px] relative"
                          loading="lazy"
                          alt=""
                          src="/checkcircle1.svg"
                        />
                        <div className="flex-1 relative font-medium">
                          Multi-step Zaps
                        </div>
                      </div>
                      <div className="self-stretch h-[24.2px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[11px]">
                        <img
                          className="h-[23px] w-[23px] relative"
                          alt=""
                          src="/checkcircle1.svg"
                        />
                        <div className="flex-1 relative font-medium">
                          3 Premium Apps
                        </div>
                      </div>
                      <div className="self-stretch h-[24.2px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[11px]">
                        <img
                          className="h-[23px] w-[23px] relative"
                          alt=""
                          src="/checkcircle1.svg"
                        />
                        <div className="flex-1 relative font-medium">
                          2 Users team
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleMembershipSelect("starter")}
                    className=" cursor-pointer w-[238.4px] rounded-[27.64px] bg-steelblue-200 overflow-hidden flex flex-col items-start justify-center pt-[13px] pb-[12.800000000000182px] pr-[64.09999999999854px] pl-[63.30000000000109px] box-border mix-blend-normal whitespace-nowrap text-center text-mid-3 text-white"
                  >
                    <div className="self-stretch relative font-medium">
                      {selected == "starter" ? "Selected" : " Choose plan"}
                    </div>
                  </div>
                </div>
                <div className="w-[50%]  flex flex-col items-start justify-start gap-[61.90000000000009px] min-w-[50%]  mq450:gap-[31px_61.90000000000009px] mq750:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[23.049999999999955px]">
                    <div className="h-[53px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[9.799999999999956px] pb-[2.2000000000000455px] pr-5 pl-0 box-border gap-[6px] z-[5]">
                      <b className="relative leading-[52.97px] whitespace-nowrap mq450:text-6xl mq450:leading-[32px] mq1050:text-14xl mq1050:leading-[42px]">
                        $54
                      </b>
                      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-lgi-6 text-lightslategray">
                        <div className="relative font-medium inline-block min-w-[76px]">
                          /month
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[106.3px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[53.30000000000018px] box-border gap-[7px] z-[5] text-13xl-2">
                      <div className="relative font-medium shrink-0  mq450:text-lgi mq1050:text-7xl">
                        Professional
                      </div>
                      <div className="self-stretch relative text-mid-3 font-medium text-lightslategray shrink-0">
                        Advanced tools to take your work to the next level.
                      </div>
                    </div>
                    <div className="w-[238.4px] flex flex-col items-start justify-start gap-[11.500000000000153px] text-mid-3 text-lightslategray">
                      <div className="self-stretch h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.5px] pb-[0.6999999999998181px] pr-px pl-0 box-border gap-[11px] z-[5]">
                        <img
                          className="h-[23px] w-[23px] relative min-h-[23px]"
                          alt=""
                          src="/checkcircle1-3.svg"
                        />
                        <div className="mt-[-1.400000000000091px] flex-1 relative font-medium">
                          Multi-step Zaps
                        </div>
                      </div>
                      <div className="h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[0.09999999999990904px] box-border gap-[11.600000000000364px] z-[5]">
                        <div className="h-[24.1px] flex flex-col items-start justify-start pt-[1.099999999999909px] px-0 pb-0 box-border">
                          <img
                            className="w-[23px] h-[23px] relative shrink-0 [debug_commit:612783b]"
                            alt=""
                            src="/checkcircle1-4.svg"
                          />
                        </div>
                        <div className="w-[203.8px] relative font-medium inline-block shrink-0 [debug_commit:612783b]">
                          Unlimited Premium Apps
                        </div>
                      </div>
                      <div className="self-stretch h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.5px] pb-[0.6999999999998181px] pr-px pl-0 box-border gap-[11px] z-[5]">
                        <img
                          className="h-[23px] w-[23px] relative min-h-[23px]"
                          alt=""
                          src="/checkcircle1-3.svg"
                        />
                        <div className="mt-[-1.400000000000091px] flex-1 relative font-medium">
                          50 Users team
                        </div>
                      </div>
                      <div className="self-stretch h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.5px] pb-[0.6999999999998181px] pr-px pl-0 box-border gap-[11px] z-[5]">
                        <img
                          className="h-[23px] w-[23px] relative min-h-[23px]"
                          alt=""
                          src="/checkcircle1-3.svg"
                        />
                        <div className="mt-[-1.400000000000091px] flex-1 relative font-medium">
                          Shared Workspace
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleMembershipSelect("premium")}
                    className="cursor-pointer rounded-[27.64px] bg-steelblue-200 overflow-hidden flex flex-row items-start justify-start pt-[13px] pb-[12.800000000000182px] pr-16 pl-[63.39999999999963px] mix-blend-normal whitespace-nowrap z-[5] text-center text-mid-3 text-white"
                  >
                    <div className="w-[111px] relative font-medium inline-block">
                      {selected == "premium" ? "Selected" : " Choose plan"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] mq450:w-[100%] mq750:w-[100%] flex flex-col items-start justify-start pt-0 px-0 pb-[23px] box-border max-w-full text-mid-3 text-white">
                <div className=" rounded-[29.94px] bg-main-color shadow-[0px_48.4px_39.15px_rgba(11,_144,_175,_0.3)] flex flex-col items-start justify-start py-[23px] pr-[34.49999999999818px] pl-[34.600000000000364px] gap-[23px] z-[5]">
                  <div className=" flex flex-row items-start justify-end text-center text-[11.5px]">
                    <div className="rounded-[15.55px] bg-nd flex flex-row items-start justify-start pt-[8.099999999999909px] pb-1.5 pr-5 pl-[18px]">
                      <div className="text-white-A700 w-[102px] relative  leading-[18px] font-extrabold inline-block">
                        MOST POPULAR
                      </div>
                    </div>
                  </div>
                  <div className="h-[53px]  flex flex-row items-start justify-start pt-[9.700000000000044px] px-3 pb-[2.2999999999999545px] box-border gap-[7px] text-22xl-5">
                    <b className=" text-white-A700 relative leading-[52.97px]  mq450:text-6xl mq450:leading-[32px] mq1050:text-14xl mq1050:leading-[42px]">
                      $89
                    </b>
                    <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-lgi-6">
                      <div className=" text-white-A700 relative font-medium inline-block min-w-[76px]">
                        /month
                      </div>
                    </div>
                  </div>
                  <div className=" h-[106.3px]   flex flex-col items-start justify-start pt-0 px-0 pb-[53.30000000000018px] box-border gap-[7px] text-13xl-2">
                    <div className=" text-white-A700 relative font-medium  mq450:text-lgi mq1050:text-7xl">
                      Company
                    </div>
                    <div className=" text-white-A700  relative text-mid-3 font-medium shrink-0 [debug_commit:612783b]">
                      Automation plus enterprise-grade features.
                    </div>
                  </div>
                  <div className="w-[238.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[3.5px] box-border gap-[11.500000000000227px]">
                    <div className=" text-white-A700  h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.599999999999909px] pr-px pl-0 box-border gap-[11px]">
                      <img
                        className="h-[23px] w-[23px] relative min-h-[23px]"
                        alt=""
                        src="/checkcircle1-7.svg"
                      />
                      <div className=" text-white-A700 mt-[-1.5px] flex-1 relative font-medium">
                        Multi-step Zap
                      </div>
                    </div>
                    <div className="h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[11.5px]">
                      <div className="h-[24.2px] flex flex-col items-start justify-start pt-[1.2000000000002728px] px-0 pb-0 box-border">
                        <img
                          className="w-[23px] h-[23px] relative"
                          alt=""
                          src="/checkcircle1-8.svg"
                        />
                      </div>
                      <div className=" text-white-A700 w-[203.8px] relative font-medium inline-block shrink-0">
                        Unlimited Premium Apps
                      </div>
                    </div>
                    <div className="self-stretch h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.599999999999909px] pr-px pl-0 box-border gap-[11px]">
                      <img
                        className="h-[23px] w-[23px] relative min-h-[23px]"
                        alt=""
                        src="/checkcircle1-7.svg"
                      />
                      <div className=" text-white-A700 mt-[-1.5px] flex-1 relative font-medium">
                        Unlimited Users Team
                      </div>
                    </div>
                    <div className=" text-white-A700 self-stretch h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.599999999999909px] pr-px pl-0 box-border gap-[11px]">
                      <img
                        className="h-[23px] w-[23px] relative min-h-[23px]"
                        alt=""
                        src="/checkcircle1-7.svg"
                      />
                      <div className=" text-white-A700 mt-[-1.5px] flex-1 relative font-medium">
                        Advanced Admin
                      </div>
                    </div>
                    <div className="h-[24.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.599999999999909px] pr-px pl-0 box-border gap-[11px]">
                      <img
                        className="h-[23px] w-[23px] relative min-h-[23px]"
                        alt=""
                        src="/checkcircle1-7.svg"
                      />
                      <div className=" text-white-A700 mt-[-1.5px] relative font-medium">
                        Custom Data Retention
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleMembershipSelect("professional")}
                    className={`cursor-pointer bottom-1 ${selected === "professional" ? "border-red-500" : ""} rounded-[27.64px] bg-white-A700 overflow-hidden flex flex-row items-start justify-start pt-[12.300000000000182px] px-[78.10000000000036px] pb-[12.399999999999636px] whitespace-nowrap text-center text-nd mq450:pl-5 mq450:pr-5 mq450:box-border`}
                  >
                    <div className=" text-nd w-[111px] relative font-medium inline-block">
                      {selected == "professional" ? "Selected" : " Choose plan"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         
        
        </main>
        <div className="mt-9 flex w-full items-center justify-center">
          <div className="w-[70%] sm:w-[100%] mq1050:w-[100%] py-9 flex flex-row sm:flex-col mq450:flex-col mq800: mq1050:items-center justify-center  py-0 px-5 box-border max-w-full text-11xl text-white">
            <div className="w-full flex flex-row  items-center justify-between gap-5 max-w-full mq1050:flex-wrap mq1050:justify-center">
              <div
                onClick={handlePrev}
                className="rounded-xl h-[80px]  mq1050:w-[30%] cursor-pointer w-[70%] sm:w-[35%]  mq750:w-[30%]   bg-[#D3D3D3] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] z-[2]  box-border"
              >
                <div className="relative z-[3] mq450:text-lg mq1050:text-3xl text-white-A700">
                  Previous
                </div>
              </div>
              <div className="h-[47px]  sm:w-[20%] flex flex-col mt-10 items-center justify-between">
                <div className=" h-[5px] flex flex-row items-center justify-between relative gap-[10px] z-[2]">
                  <div
                    className={`h-full  w-11 sm:w-3 mq1050:w-5  rounded-21xl ${currentStep == 1 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 mq1050:w-5 rounded-21xl ${currentStep == 2 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 mq1050:w-5 rounded-21xl ${currentStep == 3 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 mq1050:w-5  rounded-21xl ${currentStep == 4 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 mq1050:w-5 rounded-21xl ${currentStep == 5 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                </div>
              </div>
              {selected ? (
                <div
                  onClick={handleNext}
                  className={`w-[50%] h-[80px]  sm:w-[35%]  sm:mt-[8px]  mq750:w-[30%] mq1050:w-[30%]  cursor-pointer rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
                >
                  <div className="relative sm:text-[14px] mq1050:text-[16px] z-[3] text-white-A700">
                    {currentStep}/5 Next
                  </div>
                </div>
              ) : (
                <div
                  className={`w-[50%] h-[80px]  sm:w-[40%] mq1050:text-[16px]   mq1050:w-[30%] mq750:w-[30%] sm:mt-[8px] mq750:w-[50%]  rounded-xl bg-black-900_33 shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
                >
                  <div className="relative sm:text-[14px] z-[3] text-white-A700">
                    {currentStep}/5 Next
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMembershipPlan;
