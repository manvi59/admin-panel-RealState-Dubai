// "use client";
// import React from "react";

// export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
//   return (
//     <input
//       ref={ref}
//       className={`border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition ${className}`}
//       {...props}
//     />
//   );
// });

// Input.displayName = "Input";


"use client";
import React from "react";

export default function Button({ children, className = "", variant = "default", ...props }) {
  let baseClasses = "px-5 py-2 rounded-lg font-medium transition hover:scale-[1.02] duration-200";
  let variantClasses = "";

  if (variant === "default") {
    variantClasses = "bg-green-600 text-white hover:bg-green-700";
  } else if (variant === "outline") {
    variantClasses = "border border-green-500 text-green-700 hover:bg-green-50";
  } else if (variant === "destructive") {
    variantClasses = "bg-red-600 text-white hover:bg-red-700";
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
