import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-blue-300 transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-blue-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:support@nstxadypu.edu"
                  className="hover:text-blue-300 transition-colors"
                >
                  support@nstxadypu.edu
                </a>
              </div>
              <p className="text-gray-300">
                Available Monday - Friday<br />
                9:00 AM - 5:00 PM IST
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-gray-300">
            &copy; {currentYear} NSTxADYPU Merchandise Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
