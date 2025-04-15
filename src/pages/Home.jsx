import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFEBCD] flex flex-col items-center justify-center min-h-[calc(100vh-75px)] text-center px-4">
      <h1 className="text-6xl font-bold text-black mb-4">
        AiRA
        <span className="text-4xl font-light text-gray-700 block mt-2">
          AI Research Assistant
        </span>
      </h1>
      <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto mb-8">
        Connect the Dots, Discover the Future: AI Graph Intelligence.
      </p>

      {/* Get Started Button */}
      <button
        onClick={() => navigate("/search")}
        className="px-6 py-3 text-xl font-semibold text-white rounded-full shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        style={{
          background: "linear-gradient(to right, blue, yellow)",
          boxShadow:
            "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
