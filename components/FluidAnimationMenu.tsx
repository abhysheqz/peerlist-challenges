"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Mail, User, Settings, Menu, X } from "lucide-react";

const FluidMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const itemVariants = {
    closed: (i: number) => ({
      opacity: 0,
      y: -20,
      scale: 0.8,
      transition: {
        delay: 0.025 * (menuItems.length - 1 - i),
        ease: "linear",
      },
    }),
    open: (i: number) => ({
      opacity: 1,
      y: 42 * i,
      scale: 1,
      transition: {
        delay: 0.04 * i,
        ease: "linear",
      },
    }),
  };

  const menuItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <Mail size={20} />, label: "Mail" },
    { icon: <User size={20} />, label: "User" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="h-full flex justify-center items-center">
      <div className="fixed top-4 left-4">
        <motion.div
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer bg-gray-200"
          initial={{ y: 7 }}
          onClick={toggleMenu}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ ease: "linear", duration: 0.1 }}
          >
            {isOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className="text-gray-800" />
            )}
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <div className="w-[50px]">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="absolute w-[50px] h-[50px] bg-gray-200 flex items-center justify-center rounded-full cursor-pointer"
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <span className="text-gray-600 hover:text-gray-900">
                    {item.icon}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
      <p className="text-gray-500 text-4xl font-extralight leading-relaxed">
        Open the menu at the top left corner
      </p>
    </div>
  );
};

export default FluidMenu;
