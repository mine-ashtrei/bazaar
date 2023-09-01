import InformationPanel from "../structure/informationPanel";
import React from "react";
import Image from "next/image";
import Button from "../common/button";

export default function StoreFront() {
  return (
    <React.Fragment>
      {/* First */}
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
          <Button size="lg">Learn More</Button>
        </div>
      </InformationPanel>
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
            <h3>Quality products are just around the corner.</h3>
          </div>
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
      {/* Third */}
      <InformationPanel bg="accent-secondary">
        <div className="flex flex-col items-start justify-center">
          <div className="prose">
            <h3>Join a community of local sellers and artisans</h3>
          </div>
          <p>
            Join us today and unlock a world of possibilities. Join Ashtrei so
            you can elevate your product experience, enjoy exclusive benefits,
            and become part of a thriving community that appreciates and values
            quality products. Experience the true meaning of exceptional
            craftsmanship and innovation, as you discover the countless
            opportunities that await you as a member of our distinguished
            community.
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
      <InformationPanel bg="primary">
        <div className="flex flex-col items-start justify-center">
          <div className="prose">
            <h3>Become a part of something great</h3>
          </div>
          <p>
            Join us today and unlock a world of possibilities. Join Ashtrei so
            you can elevate your product experience, enjoy exclusive benefits,
            and become part of a thriving community that appreciates and values
            quality products.
          </p>
          <div className="flex flex-row ">
            <Button size="md" color="secondary" className="mx-2">
              Become a Seller
            </Button>
            <Button size="md" className="mx-2">
              Sign Up to Shop
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
