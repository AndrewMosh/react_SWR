import React from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}>
    <App />
  </SWRConfig>
);
