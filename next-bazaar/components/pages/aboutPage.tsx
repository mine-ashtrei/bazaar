import React from "react";
import InformationPanel from "../../components/structure/informationPanel";
import Image from "next/image";
import PanelWithBg from "../../components/structure/panelWithBg";
import Panel from "../../components/structure/panel";
import { Stack, Typography, useTheme } from "@mui/material";
import SignUpRetailerSupplier from "../common/buttons/signUpRetailerSupplier";

export default function About() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <PanelWithBg
        imgSrc="/about/start.jpg"
        title="عن أشتري"
        subtitle="كل اللي تحتاجه لتبدئ مشروعك الأن"
      />
      {/* First */}
      <InformationPanel>
        <Image src="/about/first.jpg" width={528} height={308} alt="first" />
        <Stack alignItems={"start"} justifyContent={"center"}>
          <Typography variant="h3">أسهل تجربة تسوق</Typography>
          <Typography variant="body1">
            في أشتري، نحن ملتزمون بتقديم اكبر مجموعه من المصنعين المستقلين و
            الحرفيين الذين يقدمون منتجات عالية الجودة تتجاوز توقعات عملائنا. مع
            التزامنا بالتميز، فنحن نسعى جاهدين لضمان أن تكون أفضل المنتجات
            دائمًا في متناول اليد، وعلى استعداد لتسهيل وتحسين حياة عملائنا
            الكرام. من خلال ضمان الجودة الاستثنائية والتصميمات المبتكرة والحرفية
            الفائقة باستمرار، هدفنا اننا نكون الخيار الموثوق به للأفراد الذين
            يبحثون عن منتجات عالية المستوى في مجال البيع بالتجزئة.
          </Typography>
        </Stack>
      </InformationPanel>
      {/* Second */}
      <InformationPanel backgroundColor={theme.palette.info_secondary}>
        <Stack alignItems={"start"} justifyContent={"center"}>
          <Typography variant="h3">
            انضم إلى مجتمع البائعين والحرفيين المحليين
          </Typography>
          <Typography variant="body1">
            انضم إلينا اليوم وافتح مجالاً من الإمكانيات. انضم إلى أشتري حتى
            تتمكن من تجربة منتجك والاستمتاع بالمزايا الحصرية وتصبح جزءًا من
            مجتمع يقدر المنتجات عالية الجودة . اختبر المعنى الحقيقي للحرفية
            الاستثنائية والابتكار، حيث تكتشف الفرص التي تنتظرك كعضو في مجتمعنا
            المتميز.
          </Typography>
        </Stack>
        <Image src="/about/second.jpg" width={528} height={308} alt="first" />
      </InformationPanel>
      {/* Third */}
      <InformationPanel>
        <Image src="/about/third.jpg" width={528} height={308} alt="first" />
        <Stack alignItems={"start"} justifyContent={"center"}>
          <Typography variant="h3">كن جزءً اساسياً من مسيرة نجاحنا</Typography>
          <Typography>
            انضم إلينا اليوم وافتح عالمًا من الإمكانيات. انضم إلى أشتري حتى
            تتمكن من تجربة منتجك والاستمتاع بالمزايا الحصرية وتصبح جزءًا من
            مجتمع يحتوي علي المنتجات عالية الجودة.
          </Typography>
        </Stack>
      </InformationPanel>
      <Panel backgroundColor={theme.palette.background_secondary}>
        <Typography variant="h2">سجل الآن لتعرف المزيد عن خدماتنا</Typography>
        <SignUpRetailerSupplier />
      </Panel>
    </React.Fragment>
  );
}
