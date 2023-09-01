import InformationPanel from "../structure/informationPanel";

export default function LandingPage() {
  return (
    <InformationPanel>
      <div className="mt-8 prose-2xl">
        <h3>Quality products are just around the corner.</h3>
      </div>
      <div className="flex flex-col items-start justify-center mt-8">
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
  );
}
