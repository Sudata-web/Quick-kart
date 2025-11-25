//AllProducts.jsx
import React from "react";
import ProductCard from "../AllproductPage/ProductCard";

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

const AllProducts = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          All Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
