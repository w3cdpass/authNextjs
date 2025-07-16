"use client";
import { useEffect } from "react";

export default function Toast({ show, message, type = "success", onClose }) {
  useEffect(() => {
    if (show) {
      const id = setTimeout(onClose, 4000);
      return () => clearTimeout(id);
    }
  }, [show, onClose]);

  if (!show) return null;

  const bg = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed bottom-4 inset-x-0 mx-auto max-w-sm ${bg} text-white py-3 px-4 rounded shadow-lg`}
    >
      {message}
    </div>
  );
}
