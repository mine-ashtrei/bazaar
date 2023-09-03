import { SUPPLIERS } from ".";
import SupplierCard from "./card";
import Carousel from "../structure/carousel";

export default function SupplierCarousel() {
  // TODO: for small screens create a carousel to swipe through
  return (
    <Carousel
      items={SUPPLIERS}
      CardComponent={SupplierCard}
      title="بائعين متميزين"
    />
  );
}
