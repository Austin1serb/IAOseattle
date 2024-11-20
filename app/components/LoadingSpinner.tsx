import React from "react";
interface props {
  className?: string;
}
const LoadingSpinner: React.FC<props> = ({ className }) => {
  return (
    <div
      className={`${className} inset-0 flex items-center justify-center bg-opacity-50 z-50`}
    >
      <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-5 w-5"></div>
    </div>
  );
};

export default LoadingSpinner;
