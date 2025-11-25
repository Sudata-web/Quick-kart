import React, { useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart, useWishlist } from "../../context/AppContext";

const products = [
  {
    id: 1,
    name: "Apple AirPods Pro 2nd Gen",
    desc: "Apple AirPods Pro (2nd Gen) with MagSafe charging case.",
    price: "399.99",
    rating: 4.5,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 2,
    name: "Bose QuietComfort 45",
    desc: "The Bose QuietComfort 45 headphones offer clear sound and comfort.",
    price: "329.99",
    rating: 4.5,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    desc: "The Samsung Galaxy S23 offers a powerful camera and sleek design.",
    price: "799.99",
    rating: 4.5,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 4,
    name: "Garmin Venu 2",
    desc: "The Garmin Venu 2 smartwatch keeps track of your fitness and health.",
    price: "349.99",
    rating: 4.5,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 5,
    name: "PlayStation 5",
    desc: "The PlayStation 5 takes gaming to new heights with ultra-fast loading.",
    price: "499.99",
    rating: 4.5,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    desc: "Track your workouts, sleep, and heart rate with Apple Watch Series 9.",
    price: "449.99",
    rating: 4.5,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    desc: "Industry-leading noise cancellation and long battery life.",
    price: "379.99",
    rating: 4.5,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 8,
    name: "MacBook Air M2",
    desc: "Supercharged by the Apple M2 chip for powerful performance.",
    price: "999.99",
    rating: 4.5,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
];

const ProductSection = () => {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const baseId = useId();
  const navigate = useNavigate();

  const onAdd = (e, product) => {
    e.preventDefault();
    addToCart(product, 1);
    navigate("/cart");
    alert("✅ Added to cart!");
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Popular Products
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => {
            const titleId = `${baseId}-title-${p.id}`;
            const descId = `${baseId}-desc-${p.id}`;
            const wished = wishlist.includes(p.id);

            return (
              <div
                key={p.id}
                className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
                aria-labelledby={titleId}
                aria-describedby={descId}
              >
                {/* Wishlist */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(p.id);
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition z-20"
                  aria-pressed={wished}
                  aria-label={
                    wished ? "Remove from wishlist" : "Add to wishlist"
                  }
                  title={wished ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {wished ? (
                    <FaHeart className="text-red-500 text-xl" />
                  ) : (
                    <FaRegHeart className="text-xl" />
                  )}
                </button>

                {/* Clickable card */}
                <Link to={`/products/${p.id}`} className="z-10">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="rounded-lg w-full h-60 object-contain mb-4"
                  />
                  <h3
                    id={titleId}
                    className="text-md font-semibold text-gray-800 truncate"
                  >
                    {p.name}
                  </h3>
                  <p
                    id={descId}
                    className="text-sm text-gray-500 line-clamp-2 mb-2"
                  >
                    {p.desc}
                  </p>

                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-sm text-gray-700">{p.rating}</span>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < Math.floor(p.rating)
                            ? "text-orange-500"
                            : "text-gray-300"
                        }`}
                        size={14}
                      />
                    ))}
                  </div>

                  <p className="text-lg font-semibold text-gray-900 mb-3">
                    ₹{p.price}
                  </p>
                </Link>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={(e) => onAdd(e, p)}
                    className="flex-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-sm font-medium py-2 rounded-full transition"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/products/${p.id}`}
                    className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium py-2 rounded-full transition"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block text-orange-600 font-medium hover:underline"
          >
            View More Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
