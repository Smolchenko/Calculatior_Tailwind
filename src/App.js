import { useState } from "react";
import { evaluate } from "mathjs";
import Button from "./components/Button";
import "./index.css";

const buttonRows = [
  ["AC", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  // ["0", ".", "="],
];

export default function AppCalculator() {
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

          if (formattedResult > 0.000001) {
            formattedResult = formattedResult.toFixed(8);
          }
          break;
        default:
          return;
      }

      resetMathExpression(Number(formattedResult));
    } catch (error) {
      setResult("Invalid");
    }
  };

  // BACKUP
  // const applyOperation = (updatedMathExpression, buttonLabel) => {
  //   switch (buttonLabel) {
  //     case "=":
  //       try {
  //         updatedMathExpression = updatedMathExpression.slice(0, -1);
  //         const formattedResult = evaluate(updatedMathExpression).toFixed(8);
  //         resetMathExpression(Number(formattedResult));
  //       } catch (error) {
  //         setResult("Invalid");
  //       }
  //       break;
  //     case "+/-":
  //       try {
  //         updatedMathExpression = updatedMathExpression.slice(0, -3);
  //         const formattedResult = evaluate(updatedMathExpression) * -1;
  //         resetMathExpression(Number(formattedResult));
  //       } catch (error) {
  //         setResult("Invalid");
  //       }
  //       break;
  //     case "%":
  //       try {
  //         updatedMathExpression = updatedMathExpression.slice(0, -1);
  //         let formattedResult = evaluate(updatedMathExpression) / 100;

  //         if (formattedResult > 0.000001) {
  //           formattedResult = formattedResult.toFixed(8);
  //         }
  //         resetMathExpression(Number(formattedResult));
  //       } catch (error) {
  //         setResult("Invalid");
  //       }
  //       break;
  //   }
  // };

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

  // return (
  //   <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
  //     <div className="w-64 h-auto pb-4 bg-white rounded-2xl shadow-xl border-2 border-gray-400">
  //       <div className="w-auto m-3 h-28 text-right space-y-3 py-4">
  //         <div className="text-gray-700 h-6">{mathExpression}</div>
  //         <div className="text-black font-bold text-3xl">{result}</div>
  //       </div>
  //       {buttonRows.map((row, i) => (
  //         <div className="m-2 flex justify-between" key={i}>
  //           {row.map((content, j) =>
  //             content !== "0" && content !== "=" && content !== "." ? (
  //               <Button
  //                 key={j}
  //                 content={content}
  //                 onClick={handleNewClick}
  //                 prevKey={previousButtonLabel}
  //               />
  //             ) : content === "." ? (
  //               <div
  //                 className={
  //                   content === "0" && "flex w-full ml-4 justify-between"
  //                 }
  //               >
  //                 <Button
  //                   key={j}
  //                   content={content}
  //                   onClick={handleNewClick}
  //                   prevKey={previousButtonLabel}
  //                   className={content === "0" ? "btn-zero" : ""}
  //                 />
  //               </div>
  //             ) : (
  //               <div className={content === "0" && "flex w-full"}>
  //                 <Button
  //                   key={j}
  //                   content={content}
  //                   onClick={handleNewClick}
  //                   prevKey={previousButtonLabel}
  //                   className={content === "0" ? "btn-zero" : ""}
  //                 />
  //               </div>
  //             )
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto pb-4 bg-white rounded-2xl shadow-xl border-2 border-gray-400">
        <div className="w-auto m-3 h-28 text-right space-y-3 py-4">
          <div className="text-gray-700 h-6">{mathExpression}</div>
          <div className="text-black font-bold text-3xl">{result}</div>
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
            <Button
              content="0"
              onClick={handleNewClick}
              prevKey={previousButtonLabel}
              className="btn-zero"
            />
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
