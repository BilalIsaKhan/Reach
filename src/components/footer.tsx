import React from "react";

interface FooterProps {
  number: number;
}

const Footer: React.FC<FooterProps> = ({ number }) => {
  return (
    <div className="bg-blue-600 text-white flex items-center justify-around py-4 px-6">
      {/* Left side: Dots arranged in multiple rows */}
      <div className="flex flex-col space-y-1">
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-1">
            {[...Array(6)].map((_, dotIndex) => (
              <div
                key={dotIndex}
                className="w-2 h-2 bg-white rounded-full"
              ></div>
            ))}
          </div>
        ))}
      </div>

      {/* Center: Display the number */}
      <div className="text-lg font-semibold">{number}</div>

      {/* Right side: Multiple arrows */}
      <div className="flex space-x-0">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="transform rotate-180 text-2xl">
            {">>"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
