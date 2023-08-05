import EmailForm from "../components/email";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-1/3 mx-auto">
        <h1 className="text-4xl font-bold text-center">
          All Good Things Come to Those Who Wait...
        </h1>
      </div>
      <EmailForm></EmailForm>
    </div>
  );
}
