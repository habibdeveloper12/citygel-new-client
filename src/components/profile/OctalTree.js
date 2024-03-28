const OctalTree = () => {
  return (
    <div className="text-gray-1000 box-border flex max-w-full flex-row items-start justify-center self-stretch py-0  px-5 text-left font-poppins text-base">
      <div className="bg-white z-[3] box-border flex w-full max-w-full flex-col items-start justify-start gap-[30px] rounded-11xl border-[2px] border-solid border-gray-800 py-[30px] px-7 shadow-[0px_0px_5px_rgba(0,_0,_0,_0.1)] mq750:box-border mq750:pt-[291px] mq750:pb-5">
        <div className="bg-white relative box-border hidden h-[710px] w-full max-w-full rounded-11xl border-[2px] border-solid border-gray-800 shadow-[0px_0px_5px_rgba(0,_0,_0,_0.1)]" />
        <div className="text-black flex flex-row items-start justify-start px-0 pt-0 pb-2.5 text-15xl">
          <h2 className="font-inherit relative z-[4] m-0 font-medium text-inherit mq1050:text-8xl mq450:text-xl">
            Personal Details
          </h2>
        </div>
        <div className="flex max-w-full flex-col items-start justify-start gap-[9px] self-stretch">
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <div className="relative z-[4] inline-block min-w-[79px]">
              Full Name
            </div>
          </div>
          <div className="text-black z-[4] box-border flex max-w-full flex-row items-start justify-start self-stretch rounded-mini bg-gainsboro-300 p-[25px] text-xl">
            <div className="relative hidden h-20 w-[1640px] max-w-full rounded-mini bg-gainsboro-300" />
            <div className="relative z-[5] mq450:text-base">John SMith</div>
          </div>
        </div>
        <div className="flex max-w-full flex-col items-start justify-start gap-[9px] self-stretch">
          <div className="flex flex-row items-start justify-start py-0 px-[3px]">
            <div className="relative z-[4] inline-block min-w-[44px]">
              Email
            </div>
          </div>
          <div className="text-black z-[4] box-border flex max-w-full flex-row items-start justify-start self-stretch rounded-mini bg-gainsboro-300 p-[25px] text-xl">
            <div className="relative hidden h-20 w-[1640px] max-w-full rounded-mini bg-gainsboro-300" />
            <div className="relative z-[5] mq450:text-base">
              John SMith@gmail.com
            </div>
          </div>
        </div>
        <div className="box-border flex max-w-full flex-col items-start justify-start gap-[9px] self-stretch px-0 pt-0 pb-10">
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <div className="relative z-[4]">Phone Number</div>
          </div>
          <div className="text-black flex max-w-full flex-row flex-wrap items-start justify-start gap-[10px] self-stretch text-6xl">
            <div className="z-[4] box-border flex h-20 flex-row items-start justify-start gap-[12.5px] rounded-mini bg-gainsboro-300 py-[17px] pr-4 pl-[25px]">
              <div className="relative hidden h-20 w-[150px] rounded-mini bg-gainsboro-300" />
              <img
                className="relative z-[5] h-[46px] w-[46px] rounded-76xl object-cover"
                alt=""
                src="/hash-map@2x.png"
              />
              <div className="flex flex-col items-start justify-start px-0 pt-1 pb-0">
                <div className="relative z-[5] inline-block min-w-[26px] mq450:text-xl">
                  +1
                </div>
              </div>
              <div className="box-border flex h-[26px] flex-col items-start justify-start px-0 pt-5 pb-0">
                <img
                  className="relative z-[5] h-1.5 w-3"
                  alt=""
                  src="/priority-queue.svg"
                />
              </div>
            </div>
            <div className="z-[4] box-border flex min-w-[220px] max-w-full flex-1 flex-row items-start justify-start rounded-mini bg-gainsboro-300 p-[21px]">
              <div className="relative hidden h-20 w-[1480px] max-w-full rounded-mini bg-gainsboro-300" />
              <div className="relative z-[5] mq450:text-xl">
                (00) 123 456 7890
              </div>
            </div>
          </div>
        </div>
        <div className="text-black flex max-w-full flex-row items-start justify-end self-stretch text-11xl">
          <div className="flex w-[580px] max-w-full flex-row flex-wrap items-start justify-start gap-[20px]">
            <div className="bg-white z-[4] box-border flex min-w-[182px] flex-[0.975] flex-row items-start justify-center rounded-xl border-[3px] border-solid border-main-color px-5 pt-[23px] pb-[22px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] mq450:flex-1">
              <div className="bg-white relative box-border hidden h-[90px] w-[280px] rounded-xl border-[3px] border-solid border-main-color shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)]" />
              <h2 className="font-inherit relative z-[5] m-0 inline-block min-w-[54px] font-normal text-inherit mq1050:text-5xl mq450:text-lg">
                Edit
              </h2>
            </div>
            <div className="text-white z-[4] box-border flex min-w-[182px] flex-1 flex-row items-start justify-center rounded-xl px-5 pt-[23px] pb-[22px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)]">
              <div className="relative hidden h-[90px] w-[280px] rounded-xl shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)]" />
              <h2 className="font-inherit relative z-[5] m-0 inline-block min-w-[74px] font-normal text-inherit mq1050:text-5xl mq450:text-lg">
                Save
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OctalTree;
