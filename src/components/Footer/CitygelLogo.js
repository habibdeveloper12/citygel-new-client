import { home, profile, postad } from "assets/Allimages";
const CitygelLogo = () => {
  return (
    <>
      <footer className="  bg-whitesmoke-100 flex flex-col items-center justify-start
      py-[37px]  px-5 box-border gap-[10px] mq500:gap-0 w-full text-left text-xl text-gray-1200 font-poppins">

        <img
          className="sm:w-[370px] block sm:h-[193px] object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/citygel2@2x.png"
        />
        <div className="flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full block">
          <div className=" mq750:text-base mq750:text-[19px] mq500:text-[16px] mq400:text-[14px] mq300:text-[11px]">
            ©CityGel.com 2024, All rights Reseved
          </div>
        </div>
      </footer>
      {/*~~~~~~~~~~~~~~~This is for mobile footer~~~~~~~~~~~~~~~ */}
      {/* <div
        className="fixed bottom-0 flex h-[68px] w-full w-full items-center justify-center border-t-[2px] border-solid border-gray-200
      bg-white-A700 p-4 pt-[9px] md:hidden"
      >
        <div className="flex h-5/6 w-full justify-between px-8 ">
          <img className="h-[82%] w-[33px]" src={home} />
          <img className="h-[82%] w-[38px]" src={postad} />
          <img className="h-[82%] w-[36px]" src={profile} />
        </div>
      </div> */}
    </>
  );
};

export default CitygelLogo;
