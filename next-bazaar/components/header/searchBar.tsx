import Image from "next/image";
import SearchIcon from "../../public/icons/Search_light.svg";

export default function SearchBar() {
  return (
    <div className="relative w-1/2 flex justify-end items-center">
      {/* Input */}
      <input
        type="text"
        className="w-full h-10 pl-4 pr-10 border-0 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accentPrimaryDark"
      />
      <Image
        priority
        src={SearchIcon}
        alt={""}
        className="absolute mr-2 w-10"
      />
    </div>
  );
}
