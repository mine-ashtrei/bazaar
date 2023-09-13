import SupplierCard from "./card";
import Carousel from "../structure/carousel";
import { Supplier } from "../../lib/suppliers";

export default function SupplierCarousel({
  suppliers,
}: {
  suppliers: Supplier[];
}) {
  // TODO: for small screens create a carousel to swipe through
  return (
    <Carousel
      items={suppliers}
      CardComponent={SupplierCard}
      title="بائعين متميزين"
    />
  );
}
