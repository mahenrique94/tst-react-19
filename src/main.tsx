import "./assets/styles/override.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Routes } from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
