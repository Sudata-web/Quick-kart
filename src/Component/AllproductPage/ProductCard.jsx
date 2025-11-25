import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart, useWishlist } from "../../context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const { id, name, desc, price, rating, image } = product;
  const wished = wishlist.includes(id);

  const onAdd = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    alert("✅ Added to cart!");
  };

  const onToggleWish = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(id);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
      {/* Wishlist */}
      <button
        onClick={onToggleWish}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition z-20"
        aria-pressed={wished}
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        title={wished ? "Remove from wishlist" : "Add to wishlist"}
      >
        {wished ? (
          <FaHeart className="text-red-500 text-xl" />
        ) : (
          <FaRegHeart className="text-xl" />
        )}
      </button>

      <Link to={`/products/${id}`} className="z-0">
        <img
          src={image}
          alt={name}
          className="rounded-lg w-full h-60 object-contain mb-4"
        />
        <h3 className="text-md font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-2">{desc}</p>

        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm text-gray-700">{rating}</span>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.floor(rating) ? "text-orange-500" : "text-gray-300"
              }`}
              size={14}
            />
          ))}
        </div>

        <p className="text-lg font-semibold text-gray-900 mb-3">₹{price}</p>
      </Link>

      <button
        onClick={onAdd}
        className="mt-auto border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-sm font-medium py-2 rounded-full transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
