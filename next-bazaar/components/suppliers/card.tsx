import { Supplier } from ".";
import Image from "next/image";
import Link from "next/link";

export default function SupplierCard({ item }: { item: Supplier }) {
  // TODO: change colors with the ones from the theam
  // change text to prose for the pill (categoties)
  // make starts for rating
  // check again the texts fonts
  return (
    <Link href="#" passHref>
      <div
        className="flex flex-col p-4 bg-white 
          border border-gray-200 rounded-lg shadow 
          justify-start
          items-baseline
          hover:bg-gray-100 
          "
      >
        <Image src={item.imgUrl} width={370} height={200} alt={item.name} />

        <div className="prose self-center mt-2 w-full">
          <h3>{item.name}</h3>
        </div>

        <div className="flex items-baseline justify-between mt-2 w-full">
          <div className="flex flwx-row justify-start">
            {item.geography.map((location, index) => (
              <div className="p-1" key={index}>
                {location}
              </div>
            ))}
          </div>
          <div className="">{item.rating}</div>
        </div>

        <div className="flex flwx-row justify-start mt-2 w-full">
          {item.categories.map((category, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 
                text-xs font-medium
                ltr:mr-2 rtl:ml-2 px-2.5 py-0.5 
                rounded-full dark:bg-gray-700 dark:text-gray-300"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
