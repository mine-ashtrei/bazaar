import Image from "next/image";
import Link from "next/link";

import TextButton from "../common/buttons/textButton";
import IconButton from "../common/buttons/iconButton";

export default function Footer() {
  return (
    <footer className=" bg-primary bottom-0 left-0 w-full  ltr:py-4 rlt:pl-4">
      {/* <div className="container mt-6 mb-12 mx-auto grid grid-cols-4 "> */}
      <div className="flex justify-evenly mt-6 mb-12 mx-auto">
        {/* First Column */}
        <div className="flex flex-col justify-center items-start">
          <Image
            width={171}
            height={87}
            src="/logo-lg-secondary.svg"
            alt="Logo"
          />
          <span className="mt-4">&copy; كل الحقوق محفوظة 2023 Ashtrei.com</span>
        </div>

        {/* Second Column Follow Us */}
        <div className="space-y-2">
          <h4 className="font-bold">تواصل معنا</h4>
          <div className="flex gap-2">
            {/* TODO: make the icons bolder programatically */}
            <IconButton src="/icons/social/facebook.svg" href="/" />
            <IconButton src="/icons/social/instagram.svg" href="/" />
          </div>
        </div>

        {/* Third Column About Us*/}
        <div className="space-y-2">
          <Link href="/about">
            <h4 className="font-bold">من نحن</h4>
          </Link>{" "}
          {/* About Us */}
          <TextButton text="مركز المساعده" href="/" /> {/* Help Center */}
          <TextButton text="الدعم" href="/" /> {/* Support */}
          <TextButton text="الاخبار" href="/" /> {/* Newsletter */}
          <TextButton text="المدونه" href="/" /> {/* Blog */}
        </div>

        {/* Fourth Column Legal*/}
        <div className="space-y-2">
          <h4 className="font-bold">الشروط والأحكام</h4>
          <TextButton text="شروط الاستخدام" href="/" />
          <TextButton text="سياسة الخصوصية" href="/" />
          <TextButton text="تراخيص" href="/" />
          <TextButton text="ملفات تعريف الارتباط" href="/" />
        </div>
      </div>
    </footer>
  );
}
