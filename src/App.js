import { useRef, useEffect } from "react";
// import Textfit from "react-textfit";

import Button from "./components/Button";
import useCalculator from "./useCalculator";

import "./index.css";

const buttonRows = [
  ["AC", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", "./="],
];

export default function AppCalculator() {
  const { mathExpression, result, handleNewClick, previousButtonLabel } =
    useCalculator();

  const buttonProps = {
    onClick: handleNewClick,
    prevKey: previousButtonLabel,
  };

  const resultElRef = useRef(null);

  // useEffect(() => {
  //   const resultEl = resultElRef.current;

  //   if (resultEl) {
  //     const width = resultEl.offsetWidth;
  //     const maxWidth = resultEl.parentNode.offsetWidth;
  //     const fontSize = parseFloat(window.getComputedStyle(resultEl).fontSize);
  //     console.log("width", width);
  //     console.log("maxWidth", maxWidth);
  //     console.log("fontSize", fontSize);

  //     if (width > maxWidth) {
  //       const newFontSize = Math.floor((maxWidth / width) * fontSize * 0.9);
  //       // if (newFontSize > fontSize) return;
  //       resultEl.style.fontSize = `${newFontSize}px`;
  //     } else if (fontSize <= 38) {
  //       resultEl.style.fontSize = `38px`;
  //     }
  //   }
  // }, [result]);

  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto pb-4 bg-white rounded-2xl shadow-xl border-2 border-gray-400">
        <div className="w-auto m-3 h-28 text-right space-y-3 py-4">
          <div className="text-gray-700 h-6">{mathExpression}</div>
          {/* <div className="text-black font-bold text-3xl">{result}</div> */}
          <div className="w-auto text-black font-bold text-3xl">
            {/* <Textfit mode="single" max={72} min={16}> */}
            <span ref={resultElRef}>{result}</span>
            {/* </Textfit> */}
          </div>
        </div>
        {buttonRows.map((row, i) => (
          <div className="m-2 flex justify-between" key={i}>
            {row.map((content, j) =>
              content !== "0" && content !== "./=" ? (
                <Button key={j} content={content} {...buttonProps} />
              ) : content === "0" ? (
                <div className="flex w-full" key={j}>
                  <Button
                    content={content}
                    {...buttonProps}
                    className="btn-zero"
                  />
                </div>
              ) : (
                <div className="flex w-full ml-4 justify-between" key={j}>
                  <Button content="." {...buttonProps} />
                  <Button content="=" {...buttonProps} />
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
