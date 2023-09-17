import React from "react";
import InformationPanel from "../../components/structure/informationPanel";
import Image from "next/image";
import PanelWithBg from "../../components/structure/panelWithBg";
import Panel from "../../components/structure/panel";
import Button from "../../components/common/buttons/button";
import { useTheme } from "@mui/material";

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
        <div className="flex flex-col items-start justify-center">
          <div className="prose">
            <h3>أسهل تجربة تسوق </h3>
          </div>
          <p>
            في أشتري، نحن ملتزمون بتقديم اكبر مجموعه من المصنعين المستقلين و
            الحرفيين الذين يقدمون منتجات عالية الجودة تتجاوز توقعات عملائنا. مع
            التزامنا بالتميز، فنحن نسعى جاهدين لضمان أن تكون أفضل المنتجات
            دائمًا في متناول اليد، وعلى استعداد لتسهيل وتحسين حياة عملائنا
            الكرام. من خلال ضمان الجودة الاستثنائية والتصميمات المبتكرة والحرفية
            الفائقة باستمرار، هدفنا اننا نكون الخيار الموثوق به للأفراد الذين
            يبحثون عن منتجات عالية المستوى في مجال البيع بالتجزئة.
          </p>
        </div>
      </InformationPanel>
      {/* Second */}
      <InformationPanel backgroundColor={theme.palette.desertDark}>
        <div className="flex flex-col items-start justify-center">
          <div className="prose">
            <h3>انضم إلى مجتمع البائعين والحرفيين المحليين</h3>
          </div>
          <p>
            انضم إلينا اليوم وافتح مجالاً من الإمكانيات. انضم إلى أشتري حتى
            تتمكن من تجربة منتجك والاستمتاع بالمزايا الحصرية وتصبح جزءًا من
            مجتمع يقدر المنتجات عالية الجودة . اختبر المعنى الحقيقي للحرفية
            الاستثنائية والابتكار، حيث تكتشف الفرص التي تنتظرك كعضو في مجتمعنا
            المتميز.
          </p>
        </div>
        <Image src="/about/second.jpg" width={528} height={308} alt="first" />
      </InformationPanel>
      {/* Third */}
      <InformationPanel>
        <Image src="/about/third.jpg" width={528} height={308} alt="first" />
        <div className="flex flex-col items-start justify-center">
          <div className="prose">
            <h3>كن جزءً اساسياً من مسيرة نجاحنا</h3>
          </div>
          <p>
            انضم إلينا اليوم وافتح عالمًا من الإمكانيات. انضم إلى أشتري حتى
            تتمكن من تجربة منتجك والاستمتاع بالمزايا الحصرية وتصبح جزءًا من
            مجتمع يحتوي علي المنتجات عالية الجودة.
          </p>
        </div>
      </InformationPanel>
      <Panel className="bg-accentPrimary flex flex-col justify-center items-center gap-8">
        <div className="text-4xl">سجل الآن لتعرف المزيد عن خدماتنا </div>
        <div className="flex flex-row justify-center items-center gap-8">
          {/* Same buttons from store-front 
          TODO make one component and use it in both places */}
          <Button color="secondary" size="md">
            {" "}
            سجل كبائع
          </Button>
          <Button size="md"> سجل كمشترى</Button>
        </div>
      </Panel>
    </React.Fragment>
  );
}
