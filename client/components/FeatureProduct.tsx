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
            <img
              src="https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg"
              alt="The Engineering Club Hoodie"
              className="w-full h-96 object-cover rounded-lg bg-secondary"
            />
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
