import { useState, useEffect } from "react";

const Button = ({ content, className = "", onClick, prevKey }) => {
  const [isActive, setIsActive] = useState(false);

  const textIsNum = !isNaN(content);
  const invalidKey = prevKey === "start" && !textIsNum;

  const handleOnClick = (e) => {
    setIsActive(true);
    onClick && onClick(e.target.innerText);
  };

  useEffect(() => {
    if (isActive) {
      const timeout = setTimeout(() => setIsActive(false), 50);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  return (
    <button
      onClick={handleOnClick}
      disabled={invalidKey}
      className={`
        ${textIsNum ? "btn-number" : "btn-command"} 
        ${isActive && "transform translate-y-0.5 shadow-none"} 
        ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
