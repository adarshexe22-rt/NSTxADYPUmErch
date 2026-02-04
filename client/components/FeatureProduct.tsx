import { useState } from "react";

const sizes = ["S", "M", "L", "XL"];

export default function FeatureProduct() {
  const [selectedSize, setSelectedSize] = useState<string>("M");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <svg
                  className="w-20 h-20 mx-auto mb-4 opacity-50"
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
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                The Engineering Club Hoodie
              </h2>
              <p className="text-primary font-semibold text-xl mb-4">$49.99</p>
              <p className="text-foreground text-lg leading-relaxed text-justify">
                Celebrate your engineering pride with our signature hoodie. Crafted from premium quality
                cotton blend fabric, this hoodie features the iconic Engineering Club logo and is
                perfect for those late-night coding sessions or campus events. Available in multiple
                sizes and colors, it's a wardrobe essential for every tech enthusiast on campus.
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Select Size
              </label>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all ${
                      selectedSize === size
                        ? "bg-primary text-white"
                        : "bg-secondary text-foreground hover:bg-muted"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Buy Now Button */}
            <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors shadow-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
