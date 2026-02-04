import { ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Varsity Hoodie",
    price: 49.99,
    image: "https://images.pexels.com/photos/16160855/pexels-photo-16160855.jpeg"
  },
  {
    id: 2,
    title: "CS Dept T-Shirt",
    price: 24.99,
    image: "https://images.pexels.com/photos/8146450/pexels-photo-8146450.jpeg"
  },
  {
    id: 3,
    title: "Campus Cap",
    price: 19.99,
    image: "https://images.pexels.com/photos/33974813/pexels-photo-33974813.jpeg"
  },
  {
    id: 4,
    title: "Tech Club Hoodie",
    price: 49.99,
    image: "https://images.pexels.com/photos/16160855/pexels-photo-16160855.jpeg"
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trending on Campus
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our most popular merchandise
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Product Image Placeholder */}
              <div className="w-full h-48 bg-secondary flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Product Image</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 truncate">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="bg-primary text-white p-2 rounded-lg hover:bg-blue-800 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
