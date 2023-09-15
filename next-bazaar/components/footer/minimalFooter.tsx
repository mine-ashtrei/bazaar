import TextButton from "../common/buttons/textButton";

export default function MinimalHeader() {
  return (
    <footer>
      <div className="flex mt-2 justify-around items-center">
        <div className="flex flex-col items-center justify-center">
          <TextButton href="/" text="الرجوع للصفحه الرئيسيه" />
          <div className="my-2 mt-4">
            &#xA9; كل الحقوق محفوظة 2023 Ashtrei.com
          </div>
        </div>
      </div>
      ;
    </footer>
  );
}
