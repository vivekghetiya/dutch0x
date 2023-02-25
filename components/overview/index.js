import Image from "next/image";
import Arrow from "../../assets/images/arrow.png";

const Overview = () => {
  return (
    <div className="w-[348px]">
      <h4 className="h-9 font-normal text-2xl leading-5 text-black/[.5]">
        Overview
      </h4>
      <div className="flex justify-between pl-6 pr-4 w-[348px] h-12 bg-white border border-solid rounded-lg">
        <span className="my-3 font-normal leading-5 text-base text-black/[.6]">
          Wallet balance
        </span>
        <p className="flex items-center gap-5">
          0.489 ETH
          <Image src={Arrow} alt="arrow" />
        </p>
      </div>
      <br />
      <div className="w-[348px] h-[198px] bg-white border border-solid rounded-lg">
        <h5 className="pl-6 pr-4 mt-3 mb-6 font-medium leading-5 text-xl">
          NFTs
        </h5>
        <div className="flex justify-between pl-6 pr-4">
          <span className="my-3 font-normal leading-5 text-base text-black/[.6]">
            NFT items
          </span>
          <p className="flex items-center gap-5">
            187
            <Image src={Arrow} alt="arrow" />
          </p>
        </div>
        <div className="flex justify-between pl-6 pr-4">
          <span className="my-3 font-normal leading-5 text-base text-black/[.6]">
            Collections
          </span>
          <p className="flex items-center gap-5">
            5
            <Image src={Arrow} alt="arrow" />
          </p>
        </div>
        <div className="flex justify-between pl-6 pr-4">
          <span className="my-3 font-normal leading-5 text-base text-black/[.6]">
            Minted
          </span>
          <p className="flex items-center gap-5">
            39
            <Image src={Arrow} alt="arrow" />
          </p>
        </div>
      </div>
      <br />

      <div className="w-[348px] h-[150px] bg-white border border-solid rounded-lg">
        <h5 className="pl-6 pr-4 mt-3 mb-6 font-medium leading-5 text-xl">
          Saved Searches
        </h5>
        <div className="flex justify-between pl-6 pr-4">
          <span className="my-3 font-normal leading-5 text-base text-black/[.6]">
            Green apple
          </span>
          <p className="flex items-center">
            <Image src={Arrow} alt="arrow" />
          </p>
        </div>
        <div className="flex justify-between pl-6 pr-4">
          <span className="my-3 font-normal leading-5 text-base text-black/[.6]">
            Christmas tree
          </span>
          <p className="flex items-center">
            <Image src={Arrow} alt="arrow" />
          </p>
        </div>
      </div>
      <br />

      <div className="w-[348px] h-[150px] bg-white border border-solid rounded-lg">
        <h5 className="pl-6 pr-4 mt-3 mb-6 font-medium leading-5 text-xl">
          Recent Activity
        </h5>
        <div className="flex justify-between pl-6 pr-4">
          <span className="my-3 font-normal leading-5 text-base text-black/[.6]">
            Settings{" > "}Account
          </span>
          <p className="flex items-center">
            <Image src={Arrow} alt="arrow" />
          </p>
        </div>
        <div className="flex justify-between pl-6 pr-4">
          <span className="my-3 font-normal leading-5 text-base text-black/[.6]">
            Sales reports
          </span>
          <p className="flex items-center">
            <Image src={Arrow} alt="arrow" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Overview;
