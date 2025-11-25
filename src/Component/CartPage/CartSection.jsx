import React, { useMemo } from "react";
import { useCart } from "../../context/AppContext";
import { Link } from "react-router-dom";

export default function CartSection() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();

  const subtotal = useMemo(
    () => cart.reduce((s, it) => s + it.priceNumber * it.qty, 0),
    [cart]
  );

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="rounded-2xl border p-5 sm:p-6 text-gray-700">
          <p className="mb-4">Your cart is empty.</p>
          <Link
            to="/products"
            className="inline-block rounded-full bg-black px-4 py-2 text-white"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items */}
          <section className="lg:col-span-2 space-y-4">
            {cart.map((it) => (
              <article
                key={it.id}
                className="rounded-2xl border p-4 sm:p-5 bg-white"
              >
                {/* Row wrapper becomes stacked on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Image */}
                  <img
                    src={it.image}
                    alt={it.name}
                    className="h-24 w-24 sm:h-20 sm:w-20 rounded-xl object-cover mx-auto sm:mx-0"
                  />

                  {/* Title + unit price (grows) */}
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-base sm:text-[15px] truncate">
                      {it.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      Price: {it.priceLabel}
                    </div>
                  </div>

                  {/* Qty controls */}
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-full border px-3 py-1 text-base sm:text-sm"
                      onClick={() => updateQty(it.id, it.qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      inputMode="numeric"
                      className="w-16 sm:w-14 rounded-lg border px-2 py-1 text-center"
                      value={it.qty}
                      min={1}
                      onChange={(e) => updateQty(it.id, Number(e.target.value))}
                      aria-label="Quantity"
                    />
                    <button
                      className="rounded-full border px-3 py-1 text-base sm:text-sm"
                      onClick={() => updateQty(it.id, it.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      ＋
                    </button>
                  </div>
                </div>

                {/* Price + remove row (separate so it wraps well on mobile) */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="text-right sm:text-left sm:ml-auto sm:w-28 font-semibold">
                    ₹{(it.priceNumber * it.qty).toFixed(2)}
                  </div>

                  <button
                    className="rounded-xl border px-3 py-1 text-sm"
                    onClick={() => removeFromCart(it.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}

            {/* Mobile summary actions (hidden on lg, since sidebar summary appears) */}
            <div className="lg:hidden mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">Subtotal</span>
                <span className="text-lg font-semibold">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>
              <button className="w-full rounded-2xl bg-black px-4 py-3 font-semibold text-white">
                Checkout
              </button>
              <button
                className="w-full rounded-2xl border px-4 py-3 font-semibold"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </section>

          {/* Desktop summary (sticky) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border p-5 bg-white">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="font-medium">₹{subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between text-gray-500">
                  <dt>Shipping</dt>
                  <dd>Calculated at checkout</dd>
                </div>
                <div className="flex justify-between text-gray-500">
                  <dt>Tax</dt>
                  <dd>Calculated at checkout</dd>
                </div>
              </dl>

              <div className="mt-4 border-t pt-4 flex items-center justify-between">
                <span className="text-base font-medium">Total</span>
                <span className="text-xl font-semibold">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              <button className="mt-4 w-full rounded-2xl bg-black px-4 py-3 font-semibold text-white">
                Checkout
              </button>

              <button
                className="mt-3 w-full rounded-2xl border px-4 py-3 font-semibold"
                onClick={clearCart}
              >
                Clear Cart
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
