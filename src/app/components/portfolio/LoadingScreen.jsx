import React, { useEffect, useState } from "react";

export function LoadingScreen({ onLoadingComplete, isFadingOut }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 transition-opacity duration-500 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="mb-8 transition-transform duration-500 scale-100">
          <div className="text-6xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            TV
          </div>
        </div>

        <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden opacity-100 transition-opacity duration-500">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-gray-400 opacity-100 transition-opacity duration-500">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}
