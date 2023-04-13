import { useState, useEffect } from "react";

const Button = ({ text }) => {
  // const Button = ({ text, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const textIsNum = !isNaN(text);

  const handleOnClick = (e) => {
    setIsActive(true);
    onClick && onClick(e);
    // setTimeout(() => setIsActive(false), 100); => use useEffect instead
  };

  useEffect(() => {
    if (isActive) {
      const timeout = setTimeout(() => {
        setIsActive(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  return (
    <button
      className={`
          px-5 py-3
          ${textIsNum ? "bg-color2" : "bg-color3"}
          ${textIsNum ? "hover:bg-color1" : "hover:bg-color4"}
          text-customText font-bold text-lg
          rounded-lg shadow-sm
          focus:outline-none
          focus:shadow-outline
          ${isActive && "bg-customHover transform translate-y-0.5 shadow-none"}
        `}
      //   transition duration-200 ${isActive ? "bg-customHover" : ""}
      //     ${className} => if given via props
      //   `}
      //   style={{ backgroundColor: "#E8E2E2" }}
      //   style={{ backgroundColor: "#E8E2E2", transform: "translateX(5px)" }}
      //   shadow-md
      //   shadow-customShadow
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
};

export default Button;
