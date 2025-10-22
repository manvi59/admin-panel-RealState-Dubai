"use client";
import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";
