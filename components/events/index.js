import Image from "next/image";
import Loader from "../../assets/images/Loader.svg";
import Calender from "../../assets/images/calander.svg";
import Time from "../../assets/images/time.svg";
import Complete from "../../assets/images/complete.svg";
import event1 from "../../assets/images/event-1.png";
import event2 from "../../assets/images/event-2.png";
import style from "./event.module.css";

const Events = () => {
  return (
    <div className="w-[1092px]">
      <h4 className="h-9 font-normal text-2xl leading-5 text-black/[.5] mb-2">
        Events
      </h4>
      <div
        className={`bg-white bg-center bg-no-repeat bg-cover ${style.eventOne}`}
      >
        <div
          className={`flex p-6 bg-white/[.8] w-full h-full rounded-lg ${style.eventBackDrop}`}
        >
          <div>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-1.5 text-xs text-white font-bold bg-[#3CAA2A] py-1 pr-2 pl-6 ml-[-24px] rounded-r-lg">
                <Loader />
                Airdrop
              </span>
              <span className="flex items-center gap-2 text-sm text-black font-bold bg-black/[.1] py-1 px-2 rounded-lg">
                <Calender />
                Harvest
              </span>
              <span className="flex items-center gap-2 text-sm text-black/[.7] font-bold">
                <Time />
                Started
              </span>
              <span className="text-sm text-black/[.7] font-normal">
                2022-09-13 08:57:15
              </span>
            </div>
            <p className="text-base font-normal mt-3 text-black self-stretch">
              🍎🍌🍍The Fruit Salad Game🍆🥦🥕
            </p>
            <h1 className="text-3xl font-bold text-black mt-1 mb-2">
              Manure
              <span className="text-sm font-normal text-black ml-2.5">
                x 100
              </span>
            </h1>
            <div>
              <span className="text-sm text-black">Wallet Transactions:</span>
              <span className="ml-4 text-sm text-black">
                <b className="mr-1">44</b>Success
              </span>
              <span className="ml-4 text-sm text-black">
                <b className="mr-1">8</b>Processing
              </span>
              <span className="ml-4 text-sm text-black">
                <b className="mr-1">2</b>Failed
              </span>
            </div>
            <div className="w-[709px] h-4 bg-black/[.1] rounded-lg mt-3 mb-4">
              <div className="w-[295px] h-full bg-[#FF4800] rounded-lg" />
            </div>
            <div className="flex gap-2 items-center">
              <button className="bg-black text-white text-base font-bold px-4 py-2 rounded-lg">
                More Details
              </button>
              <button className="bg-white text-black text-base font-bold px-4 py-2 rounded-lg border border-solid border-black">
                Cancel
              </button>
              <input type="checkbox" className="h-3.5 w-3.5" />
              <span className="text-base text-black font-normal">
                Receive report on email
              </span>
            </div>
          </div>
          <Image src={event1} alt="event" className="mx-auto" />
        </div>
      </div>
      <div
        className={`mt-6 bg-white bg-center bg-no-repeat bg-cover ${style.eventTwo}`}
      >
        <div
          className={`flex p-6 bg-white/[.8] w-full h-full rounded-lg ${style.eventBackDrop}`}
        >
          <div>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-1.5 text-xs text-white font-bold bg-[#28458F] py-1 pr-2 pl-6 ml-[-24px] rounded-r-lg">
                <Complete />
                Airdrop
              </span>
              <span className="flex items-center gap-2 text-sm text-black font-bold bg-black/[.1] py-1 px-2 rounded-lg">
                <Calender />
                It’s Raining
              </span>
              <span className="flex items-center gap-2 text-sm text-black/[.7] font-bold">
                <Time />
                Started
              </span>
              <span className="text-sm text-black/[.7] font-normal">
                2022-09-13 08:57:15
              </span>
            </div>
            <p className="text-base font-normal mt-3 text-black self-stretch">
              🍎🍌🍍The Fruit Salad Game🍆🥦🥕
            </p>
            <h1 className="text-3xl font-bold text-black mt-1 mb-2">
              Water
              <span className="text-sm font-normal text-black ml-2.5">
                x 100
              </span>
            </h1>
            <div>
              <span className="text-sm text-black">Wallet Transactions:</span>
              <span className="ml-4 text-sm text-black">
                <b className="mr-1">100</b>Success
              </span>
              <span className="ml-4 text-sm text-black">
                <b className="mr-1">0</b>Processing
              </span>
              <span className="ml-4 text-sm text-black">
                <b className="mr-1">0</b>Failed
              </span>
            </div>
            <div className="w-[709px] h-4 bg-black/[.1] rounded-lg mt-3 mb-4">
              <div className="w-full h-full bg-[#FF4800] rounded-lg" />
            </div>
            <div className="flex gap-2">
              <button className="bg-black text-white text-base font-bold px-4 py-2 rounded-lg">
                More Details
              </button>
            </div>
          </div>
          <Image src={event2} alt="event" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};
export default Events;
