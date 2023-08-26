import EmailForm from "../components/email";

export default function Home() {
  return (
    <>
      {/* <div className="svg-background">
        <img src="ashtrei/pattern.svg" className="" />
      </div> */}
      <div className="overflow-hidden bg-container flex flex-col items-center justify-center min-h-screen">
        {/* <img src="ashtrei/patternAsset_4.svg" alt="Logo" /> */}
        <img
          src="ashtrei/logo.svg"
          alt="Logo"
          className="w-8/12 md:w-3/12 logo py-4"
        />
        <h1 className="font-bold text-center uppercase mt-8 md:mt-12">
          Comming soon
        </h1>
        <div className="circle-container">
          <div className="circle" style={{ opacity: 0.9 }}></div>
          <div className="circle" style={{ opacity: 0.6 }}></div>
          <div className="circle" style={{ opacity: 0.3 }}></div>
        </div>
        {/* <div className="w-1/3 mx-auto flex flex-col ">
      </div> */}
        <EmailForm></EmailForm>
      </div>
    </>
  );
}
