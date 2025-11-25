import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Unparalleled Sound",
    subtitle: "Experience crystal-clear audio with premium headphones.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Stay Connected",
    subtitle: "Compact and stylish earphones for every occasion.",
    img: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Power in Every Pixel",
    subtitle: "Shop the latest laptops for work, gaming, and more.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Featured Products
          </h2>
          <div className="mt-3 h-1 w-24 bg-orange-600 rounded mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={it.img}
                alt={it.title}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold drop-shadow-sm">
                  {it.title}
                </h3>
                <p className="mt-3 text-white/90 max-w-md text-base sm:text-lg">
                  {it.subtitle}
                </p>

                <div className="mt-6">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 font-semibold text-white hover:bg-orange-700 transition"
                  >
                    View Products
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
