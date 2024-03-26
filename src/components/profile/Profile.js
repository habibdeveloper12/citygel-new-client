import Background from "./Background";
import OctalTree from "./OctalTree";
import ConditionChecker1 from "./ConditionChecker1";
import ConditionChecker from "./ConditionChecker";
import Header1 from "components/Header1";

const Profile = () => {
  return (
    <div>
      <Header1 className="flex flex-col justify-center items-center w-full" />
      <div className="w-full rounded-31xl bg-gray-200 overflow-hidden flex flex-col items-start justify-start gap-[20px] tracking-[normal]">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <Background />
          <OctalTree />
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-5 box-border max-w-full">
          <div className="w- flex flex-col items-start justify-start gap-[20px] max-w-full">
            <ConditionChecker1 />
            <ConditionChecker />
          </div>
        </section>
        <section className="self-stretch h-[307px] bg-whitesmoke-100 flex flex-col items-center justify-start py-[37px] px-5 box-border gap-[10px] max-w-full text-left text-xl text-gray-1200 font-poppins">
          <div className="w-full h-[307px] relative bg-whitesmoke-100 hidden max-w-full" />
          <img
            className="w-[390px] h-[193px] relative object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/citygel2@2x.png"
          />
          <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-2 box-border max-w-full">
            <div className="relative z-[1] mq450:text-base">
              ©CityGel.com 2024, All rights Reseved
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
