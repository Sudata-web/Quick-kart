import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
          Subscribe now &amp; get 20% off
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-slate-500 text-base sm:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row w-full rounded-md overflow-hidden border border-slate-300 shadow-sm"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email id"
            className="flex-1 px-4 py-3 text-base text-slate-700 outline-none placeholder-slate-400"
          />

          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-6 py-3 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
