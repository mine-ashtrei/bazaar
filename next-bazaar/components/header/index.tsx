import LanguageSelector from "../buttons/languageSelector";
import SignInButton from "../buttons/signInButton";
import SignUpButton from "../buttons/signUpButton";
import Categories from "./categories";
import LogoHeader from "./logoHeader";
import SearchBar from "./searchBar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary">
      <div className="flex mt-2 justify-around items-center">
        <LogoHeader />
        <SearchBar />
        <LanguageSelector />
        <SignInButton />
        <SignUpButton />
      </div>
      <Categories />
    </header>
  );
}
