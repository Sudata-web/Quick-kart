import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AppContext = createContext(null);

// ---------- helpers ----------
const safeParse = (key, fallbackJSON) => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? fallbackJSON);
  } catch {
    return JSON.parse(fallbackJSON);
  }
};
const toNumber = (label) => {
  if (typeof label === "number") return label;
  const n = parseFloat(String(label).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

// ---------- provider ----------
export function AppProvider({ children }) {
  // cart item: { id, name, image, priceLabel, priceNumber, qty }
  const [cart, setCart] = useState(() => safeParse("cart", "[]"));
  // wishlist: [id, id, ...]
  const [wishlist, setWishlist] = useState(() => safeParse("wishlist", "[]"));
  // user: { name, email } | null
  const [user, setUser] = useState(() => safeParse("user", "null"));

  // persist each slice
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  useEffect(
    () => localStorage.setItem("wishlist", JSON.stringify(wishlist)),
    [wishlist]
  );
  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);

  // ---------- cart actions ----------
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const i = prev.findIndex((it) => it.id === product.id);
      if (i > -1) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          priceLabel: product.price,
          priceNumber: toNumber(product.price),
          qty,
        },
      ];
    });
  };

  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, Number(qty) || 1) } : it
      )
    );

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((it) => it.id !== id));
  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((s, it) => s + it.qty, 0),
    [cart]
  );
  const cartSubtotal = useMemo(
    () => cart.reduce((s, it) => s + it.priceNumber * it.qty, 0),
    [cart]
  );

  // ---------- wishlist actions ----------
  const toggleWishlist = (id) =>
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  // ---------- user actions ----------
  // For your use-case we only store name & email
  const login = ({ name, email }) => setUser({ name, email });
  const logout = () => setUser(null);
  const updateUser = (patch) => setUser((u) => (u ? { ...u, ...patch } : u));

  const value = {
    // cart
    cart,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
    // wishlist
    wishlist,
    toggleWishlist,
    // user
    user,
    login,
    logout,
    updateUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// ---------- convenience hooks ----------
export const useCart = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useCart must be used inside <AppProvider>");
  const {
    cart,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
  } = ctx;
  return {
    cart,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
  };
};

export const useWishlist = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useWishlist must be used inside <AppProvider>");
  const { wishlist, toggleWishlist } = ctx;
  return { wishlist, toggleWishlist };
};

export const useUser = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useUser must be used inside <AppProvider>");
  const { user, login, logout, updateUser } = ctx;
  return { user, login, logout, updateUser };
};
