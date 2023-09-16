import Modal from "../common/modal";
import Link from "next/link";
import Button from "../common/buttons/button";
import InputField from "../common/inputs/inputField";
import ButtonWithIcon from "../common/buttons/buttonWithIcon";

import { signIn, SignInResponse } from "next-auth/react";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import Snackbar from "../common/snackbar";

type LoginModalProps = {
  onClose: () => void;
};

function Divider() {
  return <span className="h-[1px] w-full bg-black"></span>;
}

// make it a separate component
function Alert({ message }: { message: string }) {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">Error</span> {message}
    </div>
  );
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const loginFunc = async (
    signInPromise: Promise<SignInResponse | undefined>
  ) => {
    const res = await signInPromise;
    if (res?.error) {
      setLoginError(res.error);
    } else {
      router.push("/dashboard");
    }
  };

  // TODO: create a component with the login form and put it in a /auth/signin page
  return (
    <Modal onClose={onClose}>
      {showSnackbar && (
        <Snackbar
          open={showSnackbar}
          onClose={() => setShowSnackbar(false)}
          message="BLBL"
          timeout={5000}
          type="info"
        />
      )}
      <div className="flex flex-col items-center justify-center h-full gap-3 w-[33vw]">
        {/*Welcome back */}
        <b className="text-2xl">مرحباً بك!</b>
        {/* Sign in to your account */}
        <h5 className="text-xl -mt-2">سجل دخول بحسابك</h5>
        {loginError && Alert({ message: loginError })}
        {/* email */}
        <InputField
          className="w-11/12"
          inputType="email"
          label="البريد الأليكتروني"
          ref={emailInputRef}
        />
        {/* password */}
        <InputField
          className="w-11/12"
          inputType="password"
          label="كلمة السر"
          ref={passwordInputRef}
        />
        {/* forgot password link */}
        <div className="self-end px-4 text-xs">
          <Link href="/">نسيت كلمة السر؟</Link>
        </div>
        {/* sign-in */}
        <Button
          className="w-11/12"
          onClick={() =>
            loginFunc(
              signIn("login", {
                username: emailInputRef.current?.value,
                password: passwordInputRef.current?.value,
                redirect: false,
              })
            )
          }
        >
          تسجيل الدخول
        </Button>
        <div className=" w-11/12 flex flex-row items-center justify-center gap-4">
          <Divider />
          أو
          <Divider />
        </div>
        <ButtonWithIcon
          className="w-11/12"
          color="secondary"
          iconSrc="https://authjs.dev/img/providers/google.svg"
          onClick={() => loginFunc(signIn("google"))}
        >
          المتابعه بحساب Google
        </ButtonWithIcon>
        <ButtonWithIcon
          className="w-11/12"
          color="secondary"
          iconSrc="https://authjs.dev/img/providers/facebook.svg"
          onClick={() => setShowSnackbar(true)}
        >
          المتابعه بحساب Facebook
        </ButtonWithIcon>
        {/* TODO where the link starts */}
        <div className="text-xs mt-1">هل أنت مستخدم جديد؟ ابدأ من هنا.</div>
      </div>
    </Modal>
  );
}
