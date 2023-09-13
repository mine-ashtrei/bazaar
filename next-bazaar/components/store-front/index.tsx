import InformationPanel from "../structure/informationPanel";
import React from "react";
import Image from "next/image";
import Button from "../common/buttons/button";
import CategoriesCarousel from "../categories/carousel";
import SupplierCarousel from "../suppliers/carousel";
import ProductCarousel from "../products/carousel";
import { Category } from "../../lib/categories";
import { Supplier } from "../../lib/suppliers";
import { Product } from "../../lib/products";

export default function StoreFront({
  categories,
  suppliers,
  products,
}: {
  categories: Category[];
  suppliers: Supplier[];
  products: Product[];
}) {
  return (
    <React.Fragment>
      {/* First */}
      <InformationPanel>
        <div className="prose-2xl">
          <h3>أشترى! كل اللى عايزة لمشروعك بالجملة</h3>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p>
            يقوم أشتري بتوصيل تجار التجزئة بالمصنعين والحرفيين المحليين مباشرة
            لتقديم أفضل المنتجات عالية الجودة وتجارب البيع لأصحاب الأعمال
            الصغيرة.
          </p>
          <Button size="lg">أعرف المزيد</Button>
        </div>
      </InformationPanel>
      <CategoriesCarousel categories={categories} />
      {/* Second */}
      <InformationPanel bg="accent">
        <Image
          src="/landing-page/first.jpg"
          width={528}
          height={308}
          alt="first"
        />
        <div className="flex flex-col items-start justify-center">
          <div className="prose">
            <h3>تسوق أينما كنت</h3>
          </div>
          <p>
            في أشتري، نحن ملتزمون بتقديم اكبر مجموعه من المصنعين المستقلين و
            الحرفيين الذين يقدمون منتجات عالية الجودة تتجاوز توقعات عملائنا. مع
            التزامنا بالتميز، فنحن نسعى جاهدين لضمان أن تكون أفضل المنتجات
            دائمًا في متناول اليد، وعلى استعداد لتسهيل وتحسين حياة عملائنا
            الكرام. من خلال ضمان الجودة الاستثنائية والتصميمات المبتكرة والحرفية
            الفائقة باستمرار، هدفنا اننا نكون الخيار الموثوق به للأفراد الذين
            يبحثون عن منتجات عالية الجوده في مجال البيع بالتجزئة.
          </p>
        </div>
      </InformationPanel>
      <SupplierCarousel suppliers={suppliers} />
      {/* Third */}
      <InformationPanel bg="accent-secondary">
        <div className="flex flex-col items-start justify-center">
          <div className="prose">
            <h3>انضم إلى مجتمع البائعين والحرفيين المحليين</h3>
          </div>
          <p>
            انضم إلينا اليوم وافتح عالمًا من الإمكانيات. انضم إلى أشتري حتى
            تتمكن من تجربة منتجك والاستمتاع بالمزايا الحصرية وتصبح جزءًا من
            مجتمع يحتوي علي منتجات عالية الجودة ويقدرها. اختبر المعنى الحقيقي
            للحرفية الاستثنائية والابتكار، حيث تكتشف الفرص التي تنتظرك كعضو في
            مجتمعنا المتميز.
          </p>
        </div>

        <Image
          src="/landing-page/second.jpg"
          width={528}
          height={308}
          alt="second"
        />
      </InformationPanel>
      {/* Fourth */}
      {/* Maybe put products based on screen size */}
      <ProductCarousel products={products} />
      <InformationPanel bg="primary">
        <div className="flex flex-col items-start justify-center">
          <div className="prose">
            <h3>كن جزءً من مجتمع أشتري </h3>
          </div>
          <p>
            انضم إلينا اليوم وافتح عالمًا من الإمكانيات. انضم إلى أشتري حتى
            تتمكن من تجربة منتجك والاستمتاع بالمزايا الحصرية وتصبح جزءًا من
            مجتمع يقدر منتجات محلية عالية الجودة و اختبر افضل تجربة تسوق
            إليكتروني .
          </p>
          <div className="flex flex-row ">
            <Button size="md" color="secondary" className="mx-2">
              سجل كمشترى
            </Button>
            <Button size="md" className="mx-2">
              سجل كبائع
            </Button>
          </div>
        </div>
        <Image
          src="/landing-page/third.jpg"
          width={528}
          height={308}
          alt="first"
        />
      </InformationPanel>
    </React.Fragment>
  );
}
