import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";

const ThemeSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const togglePanel = () => setIsOpen(!isOpen);

  const selectTheme = (mode) => {
    if (
      (mode === "dark" && theme === "light") ||
      (mode === "light" && theme === "dark")
    ) {
      toggleTheme();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "0",
        zIndex: "50",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(31, 41, 55, 0.8)", // bg-gray-800/80
            backdropFilter: "blur(4px)", // backdrop-blur-sm
            borderColor: "rgba(55, 65, 81, 0.5)",
            borderStyle: "solid",
            borderTopLeftRadius: "1px", // border-gray-700/50
            borderBottomLeftRadius: "1px", // border-gray-700/50
            overflow: "hidden",
            transition: "all 300ms ease-in-out",
            width: isOpen ? "152px" : "50px",
          }}
        >
          <button
            onClick={togglePanel}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "3rem", // 12 * 0.25rem = 3rem
              height: "2.5rem", // 10 * 0.25rem = 2.5rem
              flexShrink: "0",
              border: "none",
              transition: "all 200ms ease-in-out",
              backgroundColor:
                theme === "dark"
                  ? "rgba(55, 65, 81, 0.5)" // bg-gray-700/50
                  : "rgba(31, 41, 55, 0.5)", // bg-gray-800/50
              ":hover":
                theme !== "dark"
                  ? {
                      backgroundColor: "rgba(55, 65, 81, 0.3)", // hover:bg-gray-700/30
                    }
                  : {},
            }}
          >
            <FiSettings
              style={{
                width: "1.25rem", // 5 * 0.25rem = 1.25rem
                height: "1.25rem", // 5 * 0.25rem = 1.25rem
                color: "#D1D5DB", // Gray-300 color from Tailwind
              }}
            />
          </button>
          <div
            style={{
              display: "flex",
              gap: "0.5rem", // gap-2
              padding: "0.5rem", // p-2
              transition: "all 300ms ease-in-out",
              opacity: isOpen ? "1" : "0", // opacity-100 or opacity-0
              transform: isOpen ? "translateX(0)" : "translateX(100%)", // translate-x-0 or translate-x-full
            }}
          >
            <button
              onClick={() => selectTheme("dark")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                width: "2.5rem", // 10 * 0.25rem = 2.5rem
                height: "2.5rem", // 10 * 0.25rem = 2.5rem
                transition: "all 200ms ease-in-out",
                backgroundColor:
                  theme === "dark"
                    ? "rgba(55, 65, 81, 0.5)" // bg-gray-700/50
                    : "rgba(31, 41, 55, 0.5)", // bg-gray-800/50
                ":hover":
                  theme !== "dark"
                    ? {
                        backgroundColor: "rgba(55, 65, 81, 0.3)", // hover:bg-gray-700/30
                      }
                    : {},
              }}
            >
              <FiMoon
                style={{
                  width: "1rem", // 4 * 0.25rem = 1rem
                  height: "1rem", // 4 * 0.25rem = 1rem
                  transition: "color 200ms", // transition-colors duration-200
                  color: theme === "dark" ? "white" : "#D1D5DB", // text-white or text-gray-400
                }}
              />
            </button>
            <button
              onClick={() => selectTheme("light")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                width: "2.5rem", // 10 * 0.25rem = 2.5rem
                height: "2.5rem", // 10 * 0.25rem = 2.5rem
                transition: "all 200ms ease-in-out",
                backgroundColor:
                  theme === "light"
                    ? "rgba(55, 65, 81, 0.5)" // bg-gray-700/50
                    : "rgba(31, 41, 55, 0.5)", // bg-gray-800/50
                ":hover":
                  theme !== "light"
                    ? {
                        backgroundColor: "rgba(55, 65, 81, 0.3)", // hover:bg-gray-700/30
                      }
                    : {},
              }}
            >
              <FiSun
                style={{
                  width: "1rem", // 4 * 0.25rem = 1rem
                  height: "1rem", // 4 * 0.25rem = 1rem
                  transition: "color 200ms", // transition-colors duration-200
                  color: theme === "light" ? "white" : "#D1D5DB", // text-white or text-gray-400
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
