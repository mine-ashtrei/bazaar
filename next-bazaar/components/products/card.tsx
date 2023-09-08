import { Product } from ".";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item }: { item: Product }) {
  return (
    <Link href="#" passHref>
      <div
        className="flex flex-col bg-gray-50
          border border-gray-200 rounded-lg 
          justify-start
          items-baseline
          hover:bg-gray-100 
          "
      >
        <div className="w-full">
          <Image src={item.images[0]} width={304} height={200} alt="img" />
        </div>
        <div className="w-full bg-primary">
          <div className="text-2xl my-2 px-2">{item.name}</div>
          <div className="my-2 px-2">
            {item.batchPricing[0].pricePerProduct}ج. م/للقطعة
          </div>
        </div>
        {/* somehow get the supplier here based on the id in the item?? */}
        <div className="w-full bg-gray-50 my-2 px-2">
          Get supplier{item.supplierId}
        </div>
      </div>
    </Link>
  );
}
