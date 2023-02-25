import Logo from "../../assets/images/logo.svg";
import BellIcon from "../../assets/images/bell-icon.svg";
import FileIcon from "../../assets/images/file-icon.svg";
import ProfileIcon from "../../assets/images/profile-icon.svg";
import Find from "../../assets/images/find.svg";
import HeaderBlock from "../headerBlock";

const Header = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center gap-8">
        <Logo />
        <ul className="flex justify-center gap-8">
          <li className="font-bold text-base relative">
            <a href="/" className="cursor-pointer">
              Dashboard
              <span className="block absolute inset-x-1/2 top-6.5 w-2 h-2 rounded-full bg-[#FF4800]" />
            </a>
          </li>
          <li className="font-normal text-base text-black/[.6]">
            <a href="/" className="cursor-pointer">
              Create
            </a>
          </li>
          <li className="font-normal text-base text-black/[.6] relative">
            Marketplace
            <p className="text-xs absolute font-medium text-[#FF4800]">
              Coming soon
            </p>
          </li>
          <li className="font-normal text-base text-black/[.6]">
            <a href="/" className="cursor-pointer">
              Learn
            </a>
          </li>
        </ul>
        <div className="relative">
          <Find className="absolute left-4 top-3" />
          <input
            type="text"
            className="border border-solid border-black/[.2] pl-10 pr-1.5 py-1.5 rounded-lg font-normal text-base text-black/[.6] outline-none w-[631px]"
            placeholder="Find Holders"
          />
          <span className="w-6 h-6 flex justify-center items-center bg-black/[.2] rounded-sm text-base font-normal text-black/[.6] absolute right-1.5 top-[6.75px]">
            /
          </span>
        </div>
        <span className="flex justify-center items-center gap-1 p-2 rounded bg-[#3caa2a33] font-bold text-xs text-[#3CAA2A]">
          <span className="block w-2 h-2 rounded-full bg-[#3CAA2A]" />
          Status
        </span>
        <div className="flex justify-center gap-8">
          <BellIcon />
          <FileIcon />
          <ProfileIcon />
        </div>
      </div>
      <HeaderBlock />
    </div>
  );
};
export default Header;
