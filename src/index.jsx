import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App tab="home" />
    </BrowserRouter>
  </React.StrictMode>
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */) {
  undefined /* [snowpack] import.meta.hot */
    .accept();
}
