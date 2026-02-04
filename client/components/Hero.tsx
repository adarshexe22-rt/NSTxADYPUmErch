import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-96 md:h-[500px] bg-gradient-to-r from-primary to-blue-900 text-white overflow-hidden flex items-center justify-center">
      {/* Background pattern or image placeholder */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><rect fill=%22white%22 width=%221200%22 height=%22600%22/><path fill=%22%23ffffff%22 d=%22M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z%22 opacity=%220.1%22/></svg>')]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Wear Your Pride – Exclusive NSTxADYPU Gear
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Premium hoodies, tees, and accessories for the campus community.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
