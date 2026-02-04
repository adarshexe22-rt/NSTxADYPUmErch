import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shop</h1>
          <p className="text-lg text-muted-foreground mb-6">
            The Shop page is coming soon! Continue prompting to fill in this page contents if you want it customized.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
