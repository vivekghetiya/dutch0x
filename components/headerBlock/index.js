import Image from "next/image";
import NFT from "../../assets/images/nft.png";
import FileHolder from "../../assets/images/fileholder.png";
import Airdrop from "../../assets/images/airdrop.png";
import Trade from "../../assets/images/trade.png";
import Sale from "../../assets/images/sale.png";

const blocksData = [
  { logo: NFT, color: "#c0eec0", heading: "NFT Management" },
  { logo: FileHolder, color: "#fdf7d5", heading: "Find Holders" },
  { logo: Airdrop, color: "#d5f3f8", heading: "Airdrop" },
  { logo: Trade, color: "#eddbf4", heading: "Trade-in" },
  { logo: Sale, color: "#fcdcef", heading: "Sales" },
];

const HeaderBlock = () => {
  return (
    <div className="flex justify-between gap-[16px] mt-6">
      {blocksData.map((item) => (
        <div className="flex flex-col items-center" key={item.heading}>
          <div
            className={`flex justify-center items-center h-[151px] w-[280px] rounded-lg`}
            style={{ backgroundColor: item.color }}
          >
            <Image src={item.logo} alt={item.heading} />
          </div>
          <h4 className="text-base font-bold mt-2">{item.heading}</h4>
        </div>
      ))}
    </div>
  );
};

export default HeaderBlock;
