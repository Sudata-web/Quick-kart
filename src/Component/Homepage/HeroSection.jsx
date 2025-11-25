import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const slides = [
    {
      title: "Next-Level Gaming Starts Here – Discover PlayStation 5 Today!",
      text: "Hurry up only few lefts!",
      img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_sidecar-with-macbookpro-13-inch_ipad_pro_apple-pencil-using-affinity-photo_screen_05042020_big.jpg.large.jpg",
    },
    {
      title: "Experience the Future – Explore Cutting-Edge Smartphones!",
      text: "Hot deals this week!",
      img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_sidecar-with-macbookpro-13-inch_ipad_pro_apple-pencil-using-affinity-photo_screen_05042020_big.jpg.large.jpg",
    },
    {
      title: "Upgrade Your Workspace – Discover the Best Laptops!",
      text: "Top picks just for you!",
      img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_sidecar-with-macbookpro-13-inch_ipad_pro_apple-pencil-using-affinity-photo_screen_05042020_big.jpg.large.jpg",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="py-6">
              <div className="grid items-center gap-6 lg:grid-cols-2 sm:grid-cols-1 rounded-3xl bg-slate-100 px-6 sm:px-10 lg:px-14 py-10 lg:py-16">
                {/* Left Section */}
                <div>
                  <p className="text-orange-600 font-semibold mb-3">
                    {slide.text}
                  </p>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-slate-800">
                    {slide.title}
                  </h1>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 sm:px-8 py-3 text-white text-sm sm:text-base font-semibold hover:bg-orange-700 transition"
                    >
                      Shop Now
                    </Link>

                    <Link
                      to="/products"
                      className="inline-flex items-center text-slate-800 font-medium text-sm sm:text-base hover:opacity-80 transition"
                    >
                      Explore Deals →
                    </Link>
                  </div>
                </div>

                {/* Right Section (Image) */}
                <div className="flex justify-center">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="mx-auto max-h-[420px] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
