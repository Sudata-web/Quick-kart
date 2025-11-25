import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../context/AppContext";

// Ideally import from a shared source so IDs match everywhere
const productsCatalog = [
  {
    id: 1,
    name: "Apple AirPods Pro 2nd Gen",
    price: "399.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 2,
    name: "Bose QuietComfort 45",
    price: "329.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    price: "799.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 4,
    name: "Garmin Venu 2",
    price: "349.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 5,
    name: "PlayStation 5",
    price: "499.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: "449.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: "379.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
  {
    id: 8,
    name: "MacBook Air M2",
    price: "999.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=640&hei=528&fmt=jpeg&qlt=90&.v=1653493200207",
  },
];

export default function WishlistSection() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Resolve wishlist IDs to product details
  const items = useMemo(
    () => productsCatalog.filter((p) => wishlist.includes(p.id)),
    [wishlist]
  );

  const moveToCart = (product) => {
    addToCart(product, 1);
    toggleWishlist(product.id);
  };

  const moveAllToCart = () => {
    items.forEach((p) => {
      addToCart(p, 1);
      toggleWishlist(p.id);
    });
  };

  const clearWishlist = () => {
    // remove one by one for simplicity
    items.forEach((p) => toggleWishlist(p.id));
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Your Wishlist</h1>
        <Link
          to="/products"
          className="text-sm text-orange-600 hover:underline"
        >
          Continue shopping →
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border p-5 sm:p-6 text-gray-700">
          <p className="mb-4">Your wishlist is empty.</p>
          <Link
            to="/products"
            className="inline-block rounded-full bg-black px-4 py-2 text-white"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items list (2 columns area on desktop) */}
          <section className="lg:col-span-2 space-y-4">
            {items.map((p) => (
              <article
                key={p.id}
                className="rounded-2xl border p-4 sm:p-5 bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Image */}
                  <Link to={`/products/${p.id}`} className="shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-24 w-24 sm:h-20 sm:w-20 rounded-xl object-contain bg-gray-50 p-2"
                    />
                  </Link>

                  {/* Title/price */}
                  <div className="min-w-0 flex-1">
                    <Link to={`/products/${p.id}`}>
                      <div className="font-medium text-base sm:text-[15px] truncate">
                        {p.name}
                      </div>
                      <div className="text-sm text-gray-600">₹{p.price}</div>
                    </Link>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3">
                    <button
                      onClick={() => moveToCart(p)}
                      className="rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-sm font-medium py-2 px-3 transition"
                    >
                      Move to Cart
                    </button>
                    <button
                      onClick={() => toggleWishlist(p.id)}
                      className="rounded-full border text-gray-700 hover:bg-gray-50 text-sm font-medium py-2 px-3 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* Mobile summary (hidden on lg) */}
            <div className="lg:hidden mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">Items</span>
                <span className="text-lg font-semibold">{items.length}</span>
              </div>
              <button
                onClick={moveAllToCart}
                className="w-full rounded-2xl bg-black px-4 py-3 font-semibold text-white"
              >
                Move All to Cart
              </button>
              <button
                onClick={clearWishlist}
                className="w-full rounded-2xl border px-4 py-3 font-semibold"
              >
                Clear Wishlist
              </button>
            </div>
          </section>

          {/* Desktop summary (sticky panel) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border p-5 bg-white">
              <h2 className="text-lg font-semibold mb-4">Wishlist Summary</h2>

              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt>Total items</dt>
                  <dd className="font-medium">{items.length}</dd>
                </div>
              </dl>

              <button
                onClick={moveAllToCart}
                className="mt-4 w-full rounded-2xl bg-black px-4 py-3 font-semibold text-white"
              >
                Move All to Cart
              </button>

              <button
                onClick={clearWishlist}
                className="mt-3 w-full rounded-2xl border px-4 py-3 font-semibold"
              >
                Clear Wishlist
              </button>

              <Link
                to="/products"
                className="mt-3 block text-center text-sm text-orange-600 hover:underline"
              >
                Continue shopping →
              </Link>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
