// import LanguageSelector from "../buttons/languageSelector";
import { Category } from "../../lib/categories";
import SignInButton from "../buttons/signInButton";
import SignOutButton from "../buttons/signOutButton";
import SignUpButton from "../buttons/signUpButton";
import { useCategories } from "../categories/categoriesContext";
import CategoriesHeader from "../categories/categoriesHeader";
import LogoHeader from "./logoHeader";
import SearchBar from "./searchBar";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  const { categories } = useCategories();
  const authenticated = status === "authenticated";
  return (
    <header className="sticky top-0 left-0 w-full bg-primary">
      <div className="flex mt-2 justify-around items-center">
        <LogoHeader />
        <SearchBar variant="web" className="hidden md:flex" />
        <SearchBar variant="mobile" className="md:hidden" />
        {/* <LanguageSelector /> */}
        {!authenticated && (
          <>
            <SignInButton className="hidden md:block" />
            <SignUpButton />
          </>
        )}
        {authenticated && <SignOutButton />}
      </div>
      <CategoriesHeader categories={categories} />
    </header>
  );
}
