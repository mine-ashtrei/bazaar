import react from "react";

export default function InformationPanel({
  children,
}: {
  children: react.ReactNode;
}) {
  const childrenArray = react.Children.toArray(children);
  if (childrenArray.length !== 2) {
    throw new Error("The component must have exactly two children.");
  }
  return (
    <div className="flex h-[30vh] justify-evenly bg-accentPrimary">
      <div className="flex-1 flex items-center justify-center prose">
        {childrenArray[0]}
      </div>
      <div className="self-center h-4/5 w-[1px] bg-black"></div>
      <div className="flex-1 flex items-center justify-center prose">
        {childrenArray[1]}
      </div>
    </div>
  );
}
