import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TiendaOnline from "../pages/TiendaOnline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TiendaOnline />
  </StrictMode>
);
