export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-gray-50 text-gray-800 
                border border-gray-400
                ltr:mr-2 rtl:ml-2 px-2.5 py-0.5 
                rounded-full prose prose-sm"
    >
      {children}
    </div>
  );
}
