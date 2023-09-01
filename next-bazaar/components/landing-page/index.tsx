import InformationPanel from "../structure/informationPanel";
import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <React.Fragment>
      <InformationPanel>
        <div className="prose-2xl">
          <h3>Quality products are just around the corner.</h3>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p>
            Ashtrei connects local retailers and wholesalers directly to provide
            the best quality products and selling experiences for small business
            owners. Learn more
          </p>
          <button className="mt-4 bg-secondary-dark hover:bg-secondary-600 text-white px-16 py-1 rounded">
            Learn More
          </button>
        </div>
      </InformationPanel>
      <InformationPanel bg="accent">
        <Image
          src="/landing-page/first.jpg"
          width={528}
          height={308}
          alt="first"
        />
        <div className="flex flex-col items-start justify-center">
          <h6>Quality products are just around the corner.</h6>
          <p>
            At Ashtrei, we are dedicated to providing quality products that
            exceed our customers' expectations. With a commitment to excellence,
            we strive to ensure that the finest products are always just around
            the corner, ready to enhance and improve the lives of our valued
            customers. By consistently ensuring exceptional quality, innovative
            designs, and superior craftsmanship, we aim to be the trusted choice
            for individuals seeking top-tier products in retail.
          </p>
        </div>
      </InformationPanel>
    </React.Fragment>
  );
}
