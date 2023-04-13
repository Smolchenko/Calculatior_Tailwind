import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppCalculator from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppCalculator />
  </StrictMode>
);
