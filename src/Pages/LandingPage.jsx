import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();
  const title = "Welcome to the App";
  const words = title.split(" ");

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, 
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-fixed flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(/src/assets/LandingPageBG.jpg)` }}
    >
    
      <header className="text-white w-full">
        <nav className="flex justify-between items-center py-6 px-12 bg-transparent">
          <h1 className="text-3xl font-bold">Learn Code</h1>
          <ul className="flex gap-6 text-lg">
            <li>
              <Link to="/login">
                <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          className="text-4xl font-bold mb-8 text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: "5px" }} // Space between words
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

       
        <motion.button
          onClick={() => navigate("/layout")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </main>
    </div>
  );
};

export default LandingPage;
