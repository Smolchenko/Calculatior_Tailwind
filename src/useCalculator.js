import { useState } from "react";
import { abs, evaluate } from "mathjs";

const useCalculator = () => {
  const [mathExpression, setMathExpression] = useState("");
  const [previousButtonLabel, setPreviousButtonLabel] = useState("start");
  const [result, setResult] = useState(0);

  const resetMathExpression = (val) => {
    if (val) {
      setMathExpression(val);
      setPreviousButtonLabel(val);
      setResult(val);
      return;
    }
    setMathExpression("");
    setPreviousButtonLabel("start");
    setResult(0);
  };

  const applyOperation = (updatedMathExpression, buttonLabel) => {
    try {
      let formattedResult;

      switch (buttonLabel) {
        case "=":
          updatedMathExpression = updatedMathExpression.slice(0, -1);
          formattedResult = evaluate(updatedMathExpression).toFixed(8);
          break;
        case "+/-":
          updatedMathExpression = updatedMathExpression.slice(0, -3);
          formattedResult = evaluate(updatedMathExpression) * -1;
          break;
        case "%":
          updatedMathExpression = updatedMathExpression.slice(0, -1);
          formattedResult = evaluate(updatedMathExpression) / 100;

          //   if (abs(formattedResult) > 0.000001) {
          //     formattedResult = formattedResult.toExponential(8);
          //   }
          if (formattedResult > 0.000001) {
            formattedResult = formattedResult.toFixed(8);
          }
          //   if (abs(formattedResult) > 0.000001) {
          //     formattedResult = formattedResult.toFixed(8);
          //   }
          break;
        default:
          return;
      }

      resetMathExpression(Number(formattedResult));
    } catch (error) {
      setResult("Invalid");
    }
  };

  const updateMathExpressions = (buttonLabel) => {
    let updatedMathExpression = mathExpression + buttonLabel;

    if (isNaN(buttonLabel) && isNaN(previousButtonLabel)) {
      updatedMathExpression = updatedMathExpression.slice(0, -2) + buttonLabel;
    } else if (!isNaN(buttonLabel) && !isNaN(previousButtonLabel)) {
      setPreviousButtonLabel(previousButtonLabel + buttonLabel);
    } else {
      setPreviousButtonLabel(buttonLabel);
    }

    setMathExpression(updatedMathExpression);
    applyOperation(updatedMathExpression, buttonLabel);
  };

  const handleNewClick = (buttonLabel) => {
    if (buttonLabel === "AC") {
      resetMathExpression();
      return;
    }
    updateMathExpressions(buttonLabel);
  };

  return {
    mathExpression,
    result,
    handleNewClick,
    previousButtonLabel,
  };
};

export default useCalculator;
