import { useState, useEffect } from "react";

const Button = ({ content, className, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const textIsNum = !isNaN(content);

  const handleOnClick = (e) => {
    setIsActive(true);
    // onClick && onClick(e);
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
        ${className} 
        ${textIsNum ? "btn-number" : "btn-command"}
        ${isActive && "bg-customHover transform translate-y-0.5 shadow-none"}
      `}
      onClick={handleOnClick}
    >
      {content}
    </button>
  );
};

export default Button;
