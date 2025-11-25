import React, { useEffect, useState } from "react";

// Reusable counter animation
const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const StatsSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-10">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-extrabold text-orange-600">
              <Counter target={50000} duration={1500} />
            </h3>
            <p className="mt-2 text-slate-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-orange-600">
              <Counter target={1000} duration={1500} />
            </h3>
            <p className="mt-2 text-slate-600">Products Listed</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-orange-600">
              <Counter target={500} duration={1500} />
            </h3>
            <p className="mt-2 text-slate-600">Verified Sellers</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-orange-600">
              <Counter target={99} duration={1500} />%
            </h3>
            <p className="mt-2 text-slate-600">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
