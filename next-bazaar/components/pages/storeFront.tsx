import InformationPanel from "../structure/informationPanel";
import React from "react";
import Image from "next/image";
import ProductCarousel from "../products/carousel";
import { Category } from "../../lib/categories";
import { Supplier } from "../../lib/suppliers";
import { Product } from "../../lib/products";
import ThreeSuppliers from "../suppliers/threeItemsSupplier";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { ButtonLg, ButtonMd } from "../common/buttons/button";
import FiveCategories from "../categories/fiveCategories";

export default function StoreFront({
  categories,
  suppliers,
  products,
}: {
  categories: Category[];
  suppliers: Supplier[];
  products: Product[];
}) {
  const theme = useTheme();
  return (
    <React.Fragment>
      {/* First */}
      <InformationPanel backgroundColor={theme.palette.desertDark}>
        <Typography variant="h3">
          أشترى! كل اللى عايزة لمشروعك بالجملة
        </Typography>
        <Stack justifyContent="center" alignItems={"start"} spacing={2}>
          <Typography variant="body1">
            يقوم أشتري بتوصيل تجار التجزئة بالمصنعين والحرفيين المحليين مباشرة
            لتقديم أفضل المنتجات عالية الجودة وتجارب البيع لأصحاب الأعمال
            الصغيرة.
          </Typography>
          {/* Learn More */}
          <Button variant="contained" sx={{ ...ButtonLg }}>
            أعرف المزيد
          </Button>
        </Stack>
      </InformationPanel>
      <FiveCategories categories={categories.slice(0, 5)} />
      {/* Second */}
      <InformationPanel backgroundColor={theme.palette.vegetation}>
        <Image
          src="/landing-page/first.jpg"
          width={528}
          height={308}
          alt="first"
        />
        <Stack justifyContent="center" alignItems={"start"} spacing={1}>
          <Typography variant="h5">تسوق أينما كنت</Typography>
          <Typography variant="body1">
            في أشتري، نحن ملتزمون بتقديم اكبر مجموعه من المصنعين المستقلين و
            الحرفيين الذين يقدمون منتجات عالية الجودة تتجاوز توقعات عملائنا. مع
            التزامنا بالتميز، فنحن نسعى جاهدين لضمان أن تكون أفضل المنتجات
            دائمًا في متناول اليد، وعلى استعداد لتسهيل وتحسين حياة عملائنا
            الكرام. من خلال ضمان الجودة الاستثنائية والتصميمات المبتكرة والحرفية
            الفائقة باستمرار، هدفنا اننا نكون الخيار الموثوق به للأفراد الذين
            يبحثون عن منتجات عالية الجوده في مجال البيع بالتجزئة.
          </Typography>
        </Stack>
      </InformationPanel>
      <ThreeSuppliers suppliers={suppliers} />
      {/* Third */}
      <InformationPanel backgroundColor={theme.palette.life}>
        <Stack justifyContent="center" alignItems={"start"} spacing={1}>
          <Typography variant="h5">
            انضم إلى مجتمع البائعين والحرفيين المحليين
          </Typography>
          <Typography variant="body1">
            انضم إلينا اليوم وافتح عالمًا من الإمكانيات. انضم إلى أشتري حتى
            تتمكن من تجربة منتجك والاستمتاع بالمزايا الحصرية وتصبح جزءًا من
            مجتمع يحتوي علي منتجات عالية الجودة ويقدرها. اختبر المعنى الحقيقي
            للحرفية الاستثنائية والابتكار، حيث تكتشف الفرص التي تنتظرك كعضو في
            مجتمعنا المتميز.
          </Typography>
        </Stack>
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
      <InformationPanel backgroundColor={theme.palette.desertDark}>
        <Stack justifyContent="center" alignItems={"start"} spacing={1}>
          <Typography variant="h5">كن جزءً من مجتمع أشتري</Typography>
          <Typography variant="body1">
            انضم إلينا اليوم وافتح عالمًا من الإمكانيات. انضم إلى أشتري حتى
            تتمكن من تجربة منتجك والاستمتاع بالمزايا الحصرية وتصبح جزءًا من
            مجتمع يقدر منتجات محلية عالية الجودة و اختبر افضل تجربة تسوق
            إليكتروني .
          </Typography>
          <Stack direction={"row"} spacing={2}>
            {/* Become a seller */}
            <Button variant="contained" color="secondary" sx={{ ...ButtonMd }}>
              سجل كمشترى
            </Button>
            {/* Signup to shop */}
            <Button variant="contained" sx={{ ...ButtonMd }}>
              سجل كبائع
            </Button>
          </Stack>
        </Stack>
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
