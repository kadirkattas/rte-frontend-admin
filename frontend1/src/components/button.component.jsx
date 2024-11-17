import React from "react";

const Button = ({
  label,
  onClick,
  textColor = "text-black",
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white border border-gray-400 hover:bg-gray-200 ${textColor} text-[13px] font-bold h-8 w-20 rounded-[15px] ${className}`} // Yükseklik ve genişlik eklendi
      {...props} // Spread other props like disabled, type, etc.
    >
      {label}
    </button>
  );
};

export default Button;
