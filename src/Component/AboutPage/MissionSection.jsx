import React from "react";

const MissionSection = () => {
  return (
    <div className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
          Our Mission
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
          At <span className="text-orange-600 font-semibold">QuickCart</span>,
          we believe that technology and convenience should go hand in hand. Our
          goal is to empower customers with a seamless and secure shopping
          experience that saves time, money, and effort — because you deserve
          better than waiting in lines.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;
