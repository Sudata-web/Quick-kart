import React from "react";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
          About <span className="text-orange-600">QuickCart</span>
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Your one-stop destination for a seamless online shopping experience —
          fast, reliable, and built to deliver happiness with every order.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            Who We Are
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            QuickCart was founded with a mission to make shopping simpler and
            faster for everyone. Whether you’re looking for the latest gadgets,
            premium electronics, or daily essentials, we bring you the best
            products from trusted brands — all at unbeatable prices.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            What We Offer
          </h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
            <li>Wide range of high-quality products</li>
            <li>Fast & reliable doorstep delivery</li>
            <li>Secure payment and easy returns</li>
            <li>24/7 customer support</li>
          </ul>

          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-white font-medium hover:bg-orange-700 transition"
          >
            Explore Products →
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/shopping-online-concept-illustration_114360-1082.jpg"
            alt="About QuickCart"
            className="w-full max-w-md rounded-2xl shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
