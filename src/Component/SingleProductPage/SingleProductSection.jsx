import React, { useEffect, useMemo, useState, useId } from "react";
import { useParams, Link } from "react-router-dom";
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
      "https://store/storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
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

const SingleProductSection = () => {
  const { id } = useParams();
  const numericId = useMemo(() => Number(id), [id]);
  const product = useMemo(
    () => products.find((p) => p.id === numericId),
    [numericId]
  );

  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const isWishlisted = wishlist.includes(numericId);

  const uid = useId();
  const titleId = `${uid}-title`;
  const descId = `${uid}-desc`;
  const priceId = `${uid}-price`;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-gray-700 mb-6">Product not found.</p>
        <Link to="/products" className="text-orange-600 hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main
      className="bg-white"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span>›</span>{" "}
          <Link to="/products" className="hover:underline">
            Products
          </Link>{" "}
          <span>›</span> <span className="text-gray-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="bg-gray-50 rounded-xl p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[420px] object-contain"
            />
          </div>

          {/* Info */}
          <div>
            {/* Title + Wishlist */}
            <div className="flex items-start justify-between gap-4">
              <h1
                id={titleId}
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
                {product.name}
              </h1>
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label={
                  isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                }
                aria-pressed={isWishlisted}
                className="shrink-0 p-2 rounded-full border border-gray-200 hover:border-red-300 transition"
                title={
                  isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                {isWishlisted ? (
                  <FaHeart className="text-red-500 text-xl" />
                ) : (
                  <FaRegHeart className="text-gray-500 text-xl" />
                )}
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-700">{product.rating}</span>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "text-orange-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p id={descId} className="text-gray-600 mt-4">
              {product.desc}
            </p>

            <p
              id={priceId}
              className="text-3xl font-semibold text-gray-900 mt-6"
            >
              ₹{product.price}
            </p>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => {
                  addToCart(product, 1);
                  alert("✅ Added to cart!");
                }}
                className="flex-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-medium py-3 rounded-full transition"
              >
                Add to Cart
              </button>
              <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-full transition">
                Buy Now
              </button>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Free shipping & easy returns</li>
              <li>• Secure checkout</li>
              <li>• 1-year limited warranty</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProductSection;
