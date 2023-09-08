import react from "react";

export default function Panel({
  children,
  className,
}: {
  children: react.ReactNode;
  className?: string;
}) {
  // TODO refactor from informationPanel.tsx and take the bg code
  // informationPanel and panelWithBg should use this component
  return <div className={`${className} h-[450px]`}>{children}</div>;
}
