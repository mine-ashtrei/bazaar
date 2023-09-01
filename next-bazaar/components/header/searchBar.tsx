import Image from "next/image";
import SearchIcon from "../../public/icons/Search_light.svg";
import { ClassNameProp } from "../common/types";

type SearchBarProps = {
  variant?: "web" | "mobile";
} & ClassNameProp;

export default function SearchBar({
  className = "",
  variant = "web",
}: SearchBarProps) {
  if (variant === "mobile") {
    return (
      <button className={`p-2 ${className}`}>
        <Image priority src={SearchIcon} alt="Search" />
      </button>
    );
  }
  return (
    <div
      className={`relative w-5/12 flex justify-end items-center ${className}`}
    >
      {/* Input */}
      <input
        type="text"
        className="w-full h-10 
        pl-4 pr-10 border-0 rounded 
        focus:outline-none focus:ring-2 
        focus:ring-offset-1 focus:ring-primary-500"
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
