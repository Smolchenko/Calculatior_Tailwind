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

// export default function AppCalculator() {
//   return (
//     // <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
//     <div class="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
//       {/* <div>
//         <div class="text-xl font-medium text-black">ChitChat</div>
//         <p class="text-slate-500">You have a new message!</p>
//       </div> */}
//       {/* <div class="shrink-0"> */}
//       <div>
//         {BUTTON_CONTENT.map((btnContent) => (
//           <Button text={btnContent} />
//         ))}
//         {/* <Button text="1" /> */}
//       </div>
//     </div>
//   );
// }

// export default function AppCalculator() {
//   return (
//     <div class="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg">
//       <div class="flex flex-wrap justify-center">
//         {BUTTON_CONTENT.map((btnContent) => (
//           <div class="w-1/4">
//             <Button text={btnContent} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function AppCalculator() {
//   return (
//     <div class="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg">
//       <div class="flex flex-wrap justify-center">
//         {BUTTONS.map((btnContent) => (
//           <div class="w-1/4">
//             <div class="max-w-10">
//               <Button text={btnContent} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function AppCalculator() {
  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        {/* <div className="w-auto mx-3 my-2 h-6 flex justify-between">
          <div className="text-sm">
            {date.getHours() + ":" + date.getMinutes()}
          </div>
          <div className="flex items-center text-xs space-x-1">
            <i class="fas fa-signal"></i>
            <i class="fas fa-wifi"></i>
            <i class="fas fa-battery-three-quarters text-sm"></i>
          </div>
        </div> */}
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700">number</div>
          <div className="text-black font-bold text-3xl">sum</div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <div className="btn-yellow">C</div>
            <div className="btn-grey">(</div>
            <div className="btn-grey">)</div>
            <div className="btn-orange">/</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="btn-grey">7</div>
            <div className="btn-grey">8</div>
            <div className="btn-grey">9</div>
            <div className="btn-orange">x</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="btn-grey">4</div>
            <div className="btn-grey">5</div>
            <div className="btn-grey">6</div>
            <div className="btn-orange">-</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="btn-grey">1</div>
            <div className="btn-grey">2</div>
            <div className="btn-grey">3</div>
            <div className="btn-orange">+</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="btn-grey-jumbo">0</div>
            <div className="flex w-full ml-3 justify-between">
              <div className="btn-grey">.</div>
              <div className="btn-green">=</div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
