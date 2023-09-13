import { useEffect, useState } from "react";
import Image from "next/image";
import IconButton from "./buttons/iconButton";

export type SnackbarType = "info" | "error" | "warning" | "success";

export interface SnackbarProps {
  open: boolean;
  message: string;
  type: SnackbarType;
  timeout: number;
  onClose: () => void;
}

// TODO make the colors reflect the color scheme
const colorMapping: Record<SnackbarType, string> = {
  info: "bg-primary",
  error: "bg-red-500",
  warning: "bg-yellow-400",
  success: "bg-green-500",
};

export default function Snackbar({
  open,
  message,
  type,
  timeout,
  onClose,
}: SnackbarProps) {
  const [isShown, setIsShown] = useState(open);
  const [startAnimation, setStartAnimation] = useState(true);

  useEffect(() => {
    if (open) {
      setIsShown(true);
      setStartAnimation(false);
      const timeoutId = setTimeout(() => {
        setIsShown(false);
        onClose();
      }, timeout);

      return () => clearTimeout(timeoutId);
    }
  }, [open, onClose, timeout]);

  const handleClose = () => {
    setIsShown(false);
    onClose();
  };

  return (
    <div className="flex justify-center">
      <div
        className={`
        ${startAnimation ? "opacity-0 scale-80" : "opacity-100 scale-100"}
        fixed top-0 top-6 transition-all duration-300 ease-in-out
        p-4 rounded flex items-center justify-between 
        ${colorMapping[type]}
      `}
      >
        <p>{message}</p>
        <IconButton src="/icons/Close_square_light.svg" onClick={handleClose} />
      </div>
    </div>
  );
}
