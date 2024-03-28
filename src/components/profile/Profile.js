import Background from "./Background";
import OctalTree from "./OctalTree";
import ConditionChecker1 from "./ConditionChecker1";
import ConditionChecker from "./ConditionChecker";

import { Img } from "components";
import Header1 from "components/Header1";

const Profile = () => {
  return (
    <div>
      <Header1 />
      <div className="mx-auto w-[90%] overflow-hidden rounded-31xl bg-white-A700">
        <section className="flex max-w-full flex-col items-center justify-center">
          <div className="relative h-[800px] w-full sm:h-[381px] mq750:h-[381px] mq450:h-[381px] ">
            <div className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[800px] w-full justify-center bg-teal-900 sm:h-[381px] mq750:h-[381px] mq450:h-[381px]" />
            <div className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[800px] w-full justify-center sm:h-[381px] mq750:h-[381px] mq450:h-[381px]">
              <Img
                src="images/img_shanghai_aerial_sunset_970x1920.png"
                alt="shanghaiaerial"
                className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[800px] w-full justify-center object-cover sm:h-[381px] mq750:h-[381px] mq450:h-[381px]"
              />
              <div className="absolute left-0 bottom-0 top-0 m-auto flex h-full w-[95%] flex-col items-start justify-start">
                <div className="relative z-[1] h-[745px] w-full">
                  <div className="absolute right-0 top-0 m-auto flex w-[94%] flex-col items-center justify-start">
                    <Background />
                    <OctalTree />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 pt-0 pb-5">
          <div className="w- flex max-w-full flex-col items-start justify-start gap-[20px]">
            <ConditionChecker1 />
            <ConditionChecker />
          </div>
        </section>
        <section className="text-gray-1200 box-border flex h-[307px] max-w-full flex-col items-center justify-start gap-[10px] self-stretch bg-whitesmoke-100 py-[37px] px-5 text-left font-poppins text-xl">
          <div className="relative hidden h-[307px] w-full max-w-full bg-white-A700" />
          <img
            className="relative z-[1] h-[193px] w-[390px] max-w-full object-cover"
            loading="lazy"
            alt=""
            src="/citygel2@2x.png"
          />
          <div className="box-border flex max-w-full flex-row items-start justify-start py-0 pr-1.5 pl-2">
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
