import React from "react";
import Image from "next/image";

const FeatureCard = () => {
  const features = [
    { text: "Save development time" },
    { text: "Increase engagement" },
    { text: "Protect your users" },
    { text: "Match your brand" },
  ];

  return (
    <div className="max-w-sm rounded overflow-hidden bg-transparent text-gray-700 z-0">
      <div className="px-6 py-4 flex items-center space-x-3">
        {/* Logo SVG */}
        <Image src="/rho.svg" width={30} height={30} alt="Rhobase" />
        <div className="font-bold text-2xl mb-2 text-customCyan">Rhobase</div>
      </div>
      <ul className="list-disc marker:text-indigo-400 pl-5">
        {features.map((feature, index) => (
          <li key={index} className="text-white">{feature.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
