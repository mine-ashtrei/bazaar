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
        <SearchBar variant="web" className="hidden md:flex" />
        <SearchBar variant="mobile" className="md:hidden" />
        <LanguageSelector />
        <SignInButton className="hidden md:block" />
        <SignUpButton />
      </div>
      <Categories />
    </header>
  );
}
