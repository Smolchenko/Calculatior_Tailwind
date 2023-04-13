import { useState } from "react";
import Button from "./components/Button";
import "./index.css";

const BUTTONS = [
  "AC",
  "+/-",
  "%",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

export default function AppCalculator() {
  const [calculation, setCalculation] = useState("calculation");
  const [result, setResult] = useState("result");

  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto pb-4 bg-white rounded-2xl shadow-xl border-2 border-gray-400">
        <div className="w-auto m-3 h-28 text-right space-y-3 py-4">
          <div className="text-gray-700">{calculation}</div>
          <div className="text-black font-bold text-3xl">{result}</div>
        </div>

        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <Button content="AC" />
            <Button content="+/-" />
            <Button content="%" />
            <Button content="/" />
          </div>
          <div className="m-2 flex justify-between">
            <Button content="7" />
            <Button content="8" />
            <Button content="9" />
            <Button content="X" />
          </div>
          <div className="m-2 flex justify-between">
            <Button content="4" />
            <Button content="5" />
            <Button content="6" />
            <Button content="-" />
          </div>
          <div className="m-2 flex justify-between">
            <Button content="1" />
            <Button content="2" />
            <Button content="3" />
            <Button content="+" />
          </div>
          <div className="m-2 flex justify-between">
            <div className="flex w-full">
              <Button content="0" className="btn-zero" />
            </div>
            <div className="flex w-full ml-3 justify-between">
              <Button content="." />
              <Button content="=" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
