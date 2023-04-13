import { useState } from "react";
// import math from "mathjs";
import { evaluate } from "mathjs";

import Button from "./components/Button";
import "./index.css";

const buttonRows = [
  ["AC", "+/-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
];

export default function AppCalculator() {
  const [mathExpression, setMathExpression] = useState("");
  const [previousButtonLabel, setPreviousButtonLabel] = useState("start");
  const [result, setResult] = useState(0);
  // const [calcShouldEnd, setCalcShouldEnd] = useState(false);

  const handleClick1 = (val) => {
    if (calcEnded) {
      setCalculationStr("");
      setResult(0);
      setCalcEnded(false);
    }
    switch (val) {
      case "=":
        // const newResult = calculateWithPrecedence(calculationStr);
        const newResult = 6;
        setResult(newResult);
        setCalcEnded(true);
        break;
      case "AC":
        setCalculationStr("");
        setResult(0);
        break;
      case "%":
        // something
        break;
      case "+/-":
        // something
        break;
      default:
        setCalculationStr((prevState) => (prevState ? prevState + val : val));
        break;
    }
  };

  const resetMathExpression = () => {
    setMathExpression("");
    setPreviousButtonLabel("start");
    setResult(0);
  };

  const updateMathExpression = (buttonLabel) => {
    let updatedMathExpression = mathExpression + buttonLabel;
    if (isNaN(buttonLabel) && isNaN(previousButtonLabel)) {
      updatedMathExpression = updatedMathExpression.slice(0, -2) + buttonLabel;
    }
    setPreviousButtonLabel(buttonLabel);
    setMathExpression(updatedMathExpression);
  };

  const handleNewClick = (buttonLabel) => {
    if (buttonLabel === "AC") {
      resetMathExpression();
      return;
    }
    updateMathExpression(buttonLabel);
  };


  const handleClickNew = (val) => {
    // console.log("val", val);
    if (val === "AC") {
      setMathExpression("");
      setPrevKey("start");
      setResult(0);
    } else {
      let accStr = mathExpression + val;
      if (isNaN(val)) {
        if (isNaN(prevKey)) {
          accStr = accStr.slice(0, -2) + val;
        }
      }
      setPrevKey(val); // set prevKey
      setMathExpression(accStr); // add to the mathexpression
    }
  };
  // if (!isNaN(val)) {
  //   // if the clicked IS a number
  //   setPrevKey(val); // set prevKey
  //   setMathExpression(accStr); // add to the mathexpression
  // } else {
  //   // if the clicked isn't a number
  //   if (isNaN(prevKey)) {
  //     accStr = accStr.slice(0, -2) + val;
  //   }
  //   // but the previous is a Number
  //   // if (prevKey !== val) {
  //   // accStr = accStr.slice(0, -1) + val;
  //   // setPrevKey(val);
  //   // setMathExpression(accStr);
  //   // }
  //   // setPrevKey(val);
  //   // setMathExpression(accStr);
  //   // } else {
  //   // if the previous was already an operator, replace it
  //   // accStr = accStr.slice(0, -2) + val;
  //   // }
  //   setPrevKey(val);
  //   setMathExpression(accStr);
  // }

  // try {
  //   const resultEval = evaluate(mathExpression);

  // }
  // }

  // if (!mathExpression || typeof mathExpression !== "string") {
  // setResult("Invalid input!");
  //   // return "Invalid input!";
  // }

  // Evaluate the mathematical expression
  // try {
  //   const result = evaluate(mathExpression);
  //   setResult(result);
  //   // return result;
  // } catch (error) {
  //   setResult("Invalid");
  //   // return "Invalid expression!";
  // }

  // switch (val) {
  //   case "=":
  //     break;
  // }
  // };

  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto pb-4 bg-white rounded-2xl shadow-xl border-2 border-gray-400">
        <div className="w-auto m-3 h-28 text-right space-y-3 py-4">
          <div className="text-gray-700 h-6">{mathExpression}</div>
          <div className="text-black font-bold text-3xl">
            {previousButtonLabel}
          </div>
        </div>

        {buttonRows.map((row, i) => (
          <div className="m-2 flex justify-between" key={i}>
            {row.map((content, j) => (
              <Button
                key={j}
                content={content}
                onClick={handleNewClick}
                prevKey={previousButtonLabel}
              />
            ))}
          </div>
        ))}
        <div className="m-2 flex justify-between">
          <div className="flex w-full">
            <Button content="0" className="btn-zero" />
          </div>
          <div className="flex w-full ml-4 justify-between">
            <Button
              content="."
              onClick={handleNewClick}
              prevKey={previousButtonLabel}
            />
            <Button
              content="="
              onClick={handleNewClick}
              prevKey={previousButtonLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
