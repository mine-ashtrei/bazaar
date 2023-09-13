import Button, { ButtonProps } from "./button";
import Image from "next/image";

type ButtonWithIconProps = {
  iconSrc: string;
} & ButtonProps;

export default function ButtonWithIcon({
  children,
  iconSrc,
  size = "auto",
  color = "primary",
  className = "",
  onClick,
}: ButtonWithIconProps) {
  return (
    // TODO make the image be on the left of the text so it won't be on top of the text
    // Image tag should be under the button
    <div className={`${className} relative`}>
      <Button size={size} color={color} onClick={onClick} className="w-full">
        <div className="absolute">
          <Image height={24} width={24} src={iconSrc} alt="iconSrc" />
        </div>
        {children}
      </Button>
    </div>
  );
}
