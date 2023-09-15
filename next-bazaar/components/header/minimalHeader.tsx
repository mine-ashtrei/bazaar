import LogoHeader from "./logoHeader";

export default function MinimalHeader() {
  return (
    <header className="sticky top-0 left-0 w-full bg-primary">
      <div className="flex my-4 justify-around items-center">
        <LogoHeader />
      </div>
    </header>
  );
}
