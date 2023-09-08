import react from "react";

type InformationPanelBg = "primary" | "accent" | "accent-secondary" | "white";

const bgMapping: Record<InformationPanelBg, string | undefined> = {
  primary: "bg-primary-dark",
  accent: "bg-accentPrimary",
  "accent-secondary": "bg-accentSecondary",
  white: "white",
};

export default function InformationPanel({
  children,
  bg = "primary",
}: {
  children: react.ReactNode;
  bg?: InformationPanelBg;
}) {
  const childrenArray = react.Children.toArray(children);
  if (childrenArray.length !== 2) {
    throw new Error("The component must have exactly two children.");
  }
  return (
    <div
      className={`flex flex-col md:flex-row md:h-[450px] justify-evenly ${
        bg ? bgMapping[bg] : "bg-primary-dark"
      } `}
    >
      <div className="flex-1 flex items-center justify-center prose my-8 md:my-0 mx-8">
        {childrenArray[0]}
      </div>
      <div className="self-center w-11/12 md:w-[1px] h-[1px] md:h-4/5 bg-black my-4 md:my-0 md:mx-4"></div>
      <div className="flex-1 flex items-center justify-center prose my-8 md:my-0 mx-8">
        {childrenArray[1]}
      </div>
    </div>
  );
}
