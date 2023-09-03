"use client";
import { ClassNameProp } from "../types";
import React from "react";

type ButtonSize = "xl" | "lg" | "md" | "auto" | "auto-lg";
type ButtonColor = "primary" | "secondary";

const sizeMapping: Record<ButtonSize, string> = {
  xl: "w-[480px] px-4",
  lg: "w-[354px] px-4",
  md: "w-[192px] px-4",
  auto: "px-4",
  "auto-lg": "px-8",
};

const colorMapping: Record<ButtonColor, string> = {
  primary: "bg-secondary-dark hover:bg-secondary-800 text-white",
  secondary: "bg-secondary hover:bg-secondary-100 text-black",
};

type ButtonProps = {
  size?: ButtonSize;
  color?: ButtonColor;
  onClick?: () => void;
  children: React.ReactNode;
} & ClassNameProp;

export default function Button({
  children,
  size = "auto",
  color = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`rounded py-1 ${sizeMapping[size]} ${colorMapping[color]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
