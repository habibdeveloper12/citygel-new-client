import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Header1 from "components/Header1";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, setSubCategory } from "store/slices/adsPostSlice";

export default function PostSubCategory() {
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    setSelected(e);
    if (e != "") {
      dispatch(setSubCategory(e));
    }
  };

  const { currentStep, category, subcategory } = useSelector(
    (state) => state.post,
  );

  const handleNext = () => {
    dispatch(nextStep());
  };
  const handlePrev = () => {
    dispatch(prevStep());
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
      <div className=" z-100 container relative w-full 2xl:pr-10">
        <div className="flex  flex-col items-start justify-center lg:justify-start">
          <Text
            as="p"
            className="text-start z-[1] mt-[70px] w-[100%] text-center text-[27px] font-medium !text-black-900_03 sm:text-left sm:text-[44px]  "
          >
            Select SubCategory of Motors
          </Text>
          <Text
            as="p"
            className="z-[1] mt-4 text-center text-sm !text-black-900_87 opacity-0.8 sm:w-[80%] sm:text-left sm:text-[15px] "
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum 
          </Text>

          {/* Caterory list */}
          <div className="mx-auto mt-6 grid w-[90%] grid-cols-2 gap-4 sm:grid-cols-4 md:mx-0">
            {[
              "Cars",
              "Export Cars",
              "Motorcycles",
              "Heavy Vehicles",
              "Boats",
              "Cars",
              "Export Cars",
              "Motorcycles",
            ]?.map((data, index) => (
              <div
                key={data?.index}
                onClick={() => handleSelect("electric")}
                className={`flex h-[190px]  flex-col items-center justify-center gap-2.5 border  border-solid 2xl:py-5   ${selected == data ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame_orange_400.svg"
                  alt="export_cars_one"
                  className="mt-7 h-14 w-auto 2xl:h-[74px] 2xl:w-[74px] "
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[16px] !text-black-900_03  2xl:text-[24px]"
                >
                  {data}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9  w-full">
          <div className=" text-white box-border flex max-w-full flex-row justify-center py-0 px-5 text-11xl sm:w-[100%]  sm:flex-col md:px-0 lg:w-[90%] ">
            <div className="flex w-full max-w-full  flex-row items-center  justify-end gap-5 md:justify-between ">
              {currentStep > 1 && (
                <div
                  onClick={handlePrev}
                  className={`z-[2] box-border  flex  cursor-pointer flex-row  items-center justify-center whitespace-nowrap rounded-md bg-black-900_33 py-2 px-16 pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] md:w-[35%] md:rounded-xl md:pt-[23px] md:pb-[22px] `}
                >
                  <div className="relative z-[3] text-[14px] text-white-A700 ">
                    Previous
                  </div>
                </div>
              )}

              <div className="  flex  flex-col items-center justify-start sm:w-[20%] ">
                <div className=" relative z-[2] flex h-[5px] flex-row items-center justify-between gap-[10px]">
                  {[1, 2, 3, 4, 5]?.map((data) => (
                    <div
                      className={`h-full  w-3 rounded-21xl sm:w-4  ${currentStep == data ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                    />
                  ))}
                </div>
              </div>

              {subcategory ? (
                <div
                  onClick={handleNext}
                  className={`z-[2] box-border  flex  cursor-pointer flex-row  items-center justify-center whitespace-nowrap rounded-md py-2 px-16 pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] md:w-[35%] md:rounded-xl md:pt-[23px] md:pb-[22px] `}
                >
                  <div className="relative z-[3] text-[14px] text-white-A700 ">
                    {currentStep}/5 Next
                  </div>
                </div>
              ) : (
                <div
                  className={`z-[2] box-border  flex  cursor-pointer flex-row  items-center justify-center whitespace-nowrap rounded-md bg-black-900_33 py-2 px-16 pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)]  md:w-[35%] md:rounded-xl md:pt-[23px] md:pb-[22px] `}
                >
                  <div className="relative z-[3] text-[14px] text-white-A700 ">
                    {currentStep}/5 Next
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
