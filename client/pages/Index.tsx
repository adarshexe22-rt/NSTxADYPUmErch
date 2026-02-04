import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FeatureProduct from "@/components/FeatureProduct";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductGrid />
      <FeatureProduct />
      <Footer />
    </div>
  );
}
