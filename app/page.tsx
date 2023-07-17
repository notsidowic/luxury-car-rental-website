// pages/index.js

import HeroSection from "@/components/HeroSection";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Luxury Car Rental</title>
        <meta
          name="description"
          content="Rent luxury cars for your dream drive"
        />
        {/* Add more meta tags as needed for SEO */}
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Car Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Featured Cars</h2>
          {/* Add car cards or car slider here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
