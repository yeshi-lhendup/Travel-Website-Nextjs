import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="text-sm">
            Drukjourney is your trusted travel companion, making your dream
              vacations a reality since 2024.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com" className="hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-sm">Subscribe to our newsletter</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md flex-1 text-gray-900 focus:outline-none w-44"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {currentYear} Drukjourney. All rights reserved By Hmd Kamrul.
          </p>
        </div>
      </div>
    </footer>
  );
}