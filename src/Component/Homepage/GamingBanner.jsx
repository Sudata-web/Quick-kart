import React from "react";
import { Link } from "react-router-dom";

const GamingBanner = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-slate-100 rounded-3xl px-6 sm:px-10 lg:px-14 py-10 lg:py-16 gap-10">
          {/* Left Image */}
          <div className="flex justify-center lg:w-1/3">
            <img
              src="https://avshack.in/cdn/shop/products/110_27e5b441-babd-442e-a5cc-337fda7d751e.jpg?v=1593176587&width=640"
              alt="JBL Speaker"
              className="max-h-[250px] w-auto object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
              Level Up Your
              <br />
              <span className="text-orange-600">Gaming Experience</span>
            </h2>
            <p className="text-slate-600 mb-6">
              From immersive sound to precise controls — everything you need to
              win.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 sm:px-8 py-3 text-white text-sm sm:text-base font-semibold hover:bg-orange-700 transition"
            >
              Buy now →
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:w-1/3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/024/151/non_2x/black-joystick-gamepad-game-console-or-game-controller-computer-gaming-icon-3d-render-illustration-free-png.png"
              alt="White Xbox Controller"
              className="max-h-[230px] w-auto object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingBanner;
