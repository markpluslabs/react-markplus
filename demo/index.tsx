import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app.tsx";
import store from "./store.ts";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
);
