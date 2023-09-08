import Image from "next/image";

export default function PanelWithBg({
  imgSrc,
  title,
  subtitle,
}: {
  imgSrc: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="w-full relative h-[450px] flex flex-col items-center justify-center">
      <div className="w-full h-[450px] absolute -z-20 top-0 ">
        <Image src={imgSrc} fill={true} alt="img" />
      </div>
      <div className="w-full h-[450px] absolute -z-20 top-0 bg-black opacity-25"></div>
      <h2 className="text-white -z-10 text-6xl">{title}</h2>
      <h4 className="text-white -z-10 text-4xl">{subtitle}</h4>
    </div>
  );
}
