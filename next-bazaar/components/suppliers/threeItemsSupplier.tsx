import SupplierCard from "./card";
import { Supplier } from "../../lib/suppliers";
import ThreeItemGrid from "../structure/threeItemGrid";

export default function ThreeSuppliers({
  suppliers,
}: {
  suppliers: Supplier[];
}) {
  return (
    <ThreeItemGrid
      title="بائعين متميزين"
      href="#"
      items={suppliers.map((supplier, index) => (
        <SupplierCard item={supplier} key={index} />
      ))}
    ></ThreeItemGrid>
  );
}
