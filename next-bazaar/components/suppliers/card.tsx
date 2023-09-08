import { Supplier } from ".";
import Image from "next/image";
import Link from "next/link";
import Rating from "../common/rating";
import Pill from "../common/pill";

export default function SupplierCard({ item }: { item: Supplier }) {
  // TODO: make the ratings absolute so text will not be on two rows
  return (
    <Link href="#" passHref>
      <div
        className="flex flex-col p-4 bg-gray-50
          border border-gray-200 rounded-lg shadow 
          justify-start
          items-baseline
          hover:bg-gray-100 
          "
      >
        <Image src={item.imgUrl} width={370} height={200} alt={item.name} />
        <div className="flex flex-row justify-evenly items-center w-full">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col self-center mt-2 ">
              <b className="text-2xl">{item.name}</b>
              <div className="flex flwx-row justify-start">
                {item.geography.map((location, index) => (
                  <div className="p-1" key={index}>
                    {location}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flwx-row justify-start mt-2 w-full">
              {item.categories.map((category, index) => (
                <Pill key={index}> {category} </Pill>
              ))}
            </div>
          </div>
          <div>
            <Rating value={item.rating} />
          </div>
        </div>
      </div>
    </Link>
  );
}
