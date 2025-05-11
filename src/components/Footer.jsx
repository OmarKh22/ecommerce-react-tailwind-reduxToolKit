import React from 'react'
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 shadow-md ">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl font-bold text-white">Subscribe</h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-4 rounded shadow-md w-full"
              />
              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-300">
                We are a leading e-commerce platform offering a wide range of
                products to meet your needs. Quality and customer satisfaction
                are our top priorities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/home"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-300">
                Email: support@example.com
              </p>
              <p className="text-sm text-gray-300">Phone: (+20) 1066817430</p>
              <p className="text-sm text-gray-300">Address: Egypt</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 bg-slate-300 p-2 hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 bg-slate-300 p-2 hover:text-white transition-colors"
                >
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 bg-slate-300 p-2 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 bg-slate-300 p-2 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} O.KH All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer