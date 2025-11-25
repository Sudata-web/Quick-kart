import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand / About */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg leading-none">
                Q
              </span>
              <span className="text-2xl font-extrabold text-slate-900">
                Quick<span className="text-slate-900">Cart</span>
              </span>
            </div>
            <p className="mt-6 text-slate-600 leading-relaxed text-base">
              QuickCart is your trusted partner for online shopping. We deliver
              high-quality products, fast shipping, and the best deals to make
              your shopping journey smooth and satisfying.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 hover:text-orange-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-orange-600 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-orange-600 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 hover:text-orange-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-base text-slate-600">
              <li>📞 +1-234-567-890</li>
              <li>✉️ contact@skillotech.in</li>
              <li>
                📍 123 QuickCart Street, Bhubaneswar,
                <br /> Odisha, India
              </li>
            </ul>
          </div>

          {/* Map + Social Icons */}
          <div>
            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-40 mb-6">
              <iframe
                title="QuickCart Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.045937421321!2d-122.40136312409158!3d37.792507971982304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df5f0c0f%3A0x9ff115dbb9c8b1!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1700000000000"
              ></iframe>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm sm:text-base text-slate-700">
            Copyright {new Date().getFullYear()} ©{" "}
            <span className="text-orange-600 font-semibold">SkillOTech.in</span>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
