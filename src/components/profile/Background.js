const Background = () => {
  return (
    <div className="  text-black z-[3] my-3 h-[110px] w-full rounded-11xl text-9xl">
      <div className="border-1 border-black-900_0 relative my-4 h-[100px] w-full rounded-11xl border">
        <div className="text-white z-[5] flex h-full w-full flex-row items-center justify-between gap-6 rounded-7xl p-3 ">
          {/* <div className="relative top-[0px] left-[0px] hidden h-full w-full rounded-7xl bg-main-color" /> */}
          <div className="relative z-[6]  flex h-full w-[33.33%] items-center justify-center whitespace-nowrap rounded-7xl bg-main-color text-center text-white-A700">
            Personal Details
          </div>

          <div className="relative z-[6]  flex h-full w-[33.33%] items-center justify-center whitespace-nowrap rounded-7xl bg-white-A700 text-center  text-black-900_03">
            My Ads
          </div>
          <div className="relative z-[6]  flex h-full w-[33.33%] items-center justify-center whitespace-nowrap rounded-7xl  bg-white-A700 text-center text-black-900_03">
            Enquires
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
